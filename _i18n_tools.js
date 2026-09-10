#!/usr/bin/env node
/* Contraband — translation pipeline.
   ---------------------------------------------------------------------------
   Rooms are translated into 6 languages (ar es hi ur vi zh). Most chrome/UI
   strings repeat verbatim across rooms, so finished rooms are mined into a
   translation memory and reused; only room-specific prose is newly translated.

     node _i18n_tools.js tm                 rebuild .tm.json from finished rooms
     node _i18n_tools.js order <room>       write the work order (strings to translate)
     node _i18n_tools.js assemble <room>    build lang/*.js from en + TM + drafts, wire index.html

   Drafts live outside the repo at $CB_DRAFTS/<room>/<code>.txt as `id|text`
   lines. Strings are serialized programmatically — never hand-quoted — so
   inner quotation marks cannot break the file.                              */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

const ROOT = __dirname;
const LANGS = ['ar', 'es', 'hi', 'ur', 'vi', 'zh'];
const LANG_NAME = { ar: 'Arabic', es: 'Spanish', hi: 'Hindi', ur: 'Urdu', vi: 'Vietnamese', zh: 'Chinese' };
const WIRE_ORDER = ['es', 'vi', 'ar', 'hi', 'ur', 'zh'];   // the order all rooms use
const TM_FILE = path.join(ROOT, '.tm.json');
const DRAFTS = process.env.CB_DRAFTS || path.join(ROOT, '.drafts');

/* ---- loading ---- */
function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  return ctx.window;
}
const rooms = () => fs.readdirSync(ROOT).filter(d => fs.existsSync(path.join(ROOT, d, 'data.en.js'))).sort();
const enOf = r => load(path.join(ROOT, r, 'data.en.js')).__ROOM__;
const packOf = (r, c) => load(path.join(ROOT, r, 'lang', c + '.js')).__ROOM_LANGS__[c];

/* Ordered leaf walk. Both en and a translation have identical shape, so the
   nth leaf of one corresponds to the nth leaf of the other. */
function leaves(o, trail, out) {
  if (Array.isArray(o)) { o.forEach((v, i) => leaves(v, `${trail}[${i}]`, out)); return; }
  if (o && typeof o === 'object') { Object.keys(o).forEach(k => leaves(o[k], trail ? `${trail}.${k}` : k, out)); return; }
  if (typeof o === 'string') out.push([trail, o]);
}
const shape = en => ({ ui: en.ui, content: en.content });

/* Strings that must survive verbatim. The structural list is derived from the 52
   finished rooms: these paths were left identical in every room and language
   because they are internal identifiers (relic/arcade ids are join keys, lock
   `type` drives the widget, ccss are standard codes) or asset paths. */
const FIXED_PATHS = new Set([
  'content.meta.hero', 'content.meta.id', 'content.meta.gutenberg', 'content.meta.audio',
  'content.meta.storageKey', 'content.meta.title', 'content.meta.author',
  'content.relic.artifacts[].id', 'content.relic.artifacts[].image',
  'content.ctob.locks[].type', 'content.arcade.buckets[].id', 'content.arcade.cards[].bucket',
  'content.standards.ccss[]',
]);
const normPath = t => t.replace(/\[\d+\]/g, '[]');
function isFixed(trail, s) {
  if (FIXED_PATHS.has(normPath(trail))) return true;
  if (!/[A-Za-z\u0600-\u06FF\u0900-\u097F\u4e00-\u9fff]/.test(s)) return true;  // digits/punctuation only
  if (/^(\.\.\/|https?:\/\/|#|mailto:)/.test(s)) return true;
  if (/\.(webp|png|jpe?g|svg|gif|mp3|mp4|pdf|html|js|css)$/i.test(s)) return true;
  return false;
}

/* ---- translation memory ---- */
function buildTM() {
  const TM = { p: {}, g: {} };
  let mined = 0;
  for (const r of rooms()) {
    if (!fs.existsSync(path.join(ROOT, r, 'lang'))) continue;
    let en; try { en = enOf(r); } catch { continue; }
    const enL = []; leaves(shape(en), '', enL);
    let any = false;
    for (const c of LANGS) {
      const f = path.join(ROOT, r, 'lang', c + '.js');
      if (!fs.existsSync(f)) continue;
      let p; try { p = packOf(r, c); } catch { continue; }
      if (!p) continue;
      const trL = []; leaves(shape(p), '', trL);
      if (trL.length !== enL.length) continue;
      for (let i = 0; i < enL.length; i++) {
        if (trL[i][0] !== enL[i][0]) continue;               // shape drifted; skip room/lang
        const src = enL[i][1], dst = trL[i][1];
        if (isFixed(enL[i][0], src)) continue;
        const pk = normPath(enL[i][0]) + '\u0000' + src;
        for (const key of [pk, src]) {
          const store = key === pk ? TM.p : TM.g;
          const e = (store[key] = store[key] || {});
          const m = (e[c] = e[c] || {});
          m[dst] = (m[dst] || 0) + 1;
        }
      }
      any = true;
    }
    if (any) mined++;
  }
  fs.writeFileSync(TM_FILE, JSON.stringify(TM));
  console.log(`TM: ${Object.keys(TM.p).length} path-keyed / ${Object.keys(TM.g).length} global strings mined from ${mined} finished room(s) -> ${path.relative(ROOT, TM_FILE)}`);
}
function readTM() {
  if (!fs.existsSync(TM_FILE)) { console.error('No .tm.json — run: node _i18n_tools.js tm'); process.exit(2); }
  return JSON.parse(fs.readFileSync(TM_FILE, 'utf8'));
}
/* Translation for a string at a path. Prefer what other rooms used at the SAME
   path; fall back to a global string match only when every room agrees, so short
   ambiguous words ("memory" as a vocab term vs. as an arcade bucket id) never
   pick up the wrong reuse. */
function tmHit(TM, trail, src, code) {
  /* A reuse candidate identical to the English source means some earlier room
     left that string untranslated. Never propagate that: return null so it goes
     into the work order and gets translated properly. */
  const ok = v => (v && v !== src) ? v : null;
  const byPath = TM.p[normPath(trail) + '\u0000' + src];
  if (byPath && byPath[code]) {
    const m = byPath[code];
    return ok(Object.keys(m).sort((a, b) => m[b] - m[a])[0]);
  }
  const g = TM.g[src] && TM.g[src][code];
  if (!g) return null;
  const variants = Object.keys(g);
  return variants.length === 1 ? ok(variants[0]) : null;
}

/* ---- work order ---- */
function order(room) {
  const TM = readTM();
  const en = enOf(room);
  const L = []; leaves(shape(en), '', L);
  const seen = new Map();       // english -> id
  const rowsBySec = new Map();
  let id = 0, reused = 0;
  for (const [trail, s] of L) {
    if (isFixed(trail, s)) continue;
    if (seen.has(s)) continue;
    // covered in every language already? then nothing to ask for
    if (LANGS.every(c => tmHit(TM, trail, s, c))) { reused++; seen.set(s, null); continue; }
    seen.set(s, ++id);
    const sec = trail.replace(/^content\./, '').replace(/^ui\./, 'ui:');
    if (!rowsBySec.has(sec.split(/[.[]/)[0])) rowsBySec.set(sec.split(/[.[]/)[0], []);
    rowsBySec.get(sec.split(/[.[]/)[0]).push(`${id}|${sec}|${s}`);
  }
  const meta = en.content.meta || {};
  const out = [`# ${room} · ${meta.title || room} · ${meta.author || '?'} · ${meta.grades || ''}`,
               `# ${id} strings to translate (${reused} reused from TM)`, ''];
  for (const [sec, rows] of rowsBySec) { out.push(`## ${sec}`); out.push(...rows); out.push(''); }
  const dir = path.join(DRAFTS, room);
  fs.mkdirSync(dir, { recursive: true });
  const f = path.join(dir, 'order.txt');
  fs.writeFileSync(f, out.join('\n'));
  const chars = out.join('\n').length;
  console.log(`${room}: ${id} strings to translate, ${reused} reused from TM  (${(chars / 1024).toFixed(0)} KB order) -> ${f}`);
}

/* ---- serializer: real escaping, so inner quotes can never break a file ---- */
const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function str(s) {
  return '"' + String(s)
    .replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    .replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t')
    .replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
}
function ser(v, ind) {
  const pad = '  '.repeat(ind), pad1 = '  '.repeat(ind + 1);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    return '[\n' + v.map(x => pad1 + ser(x, ind + 1)).join(',\n') + '\n' + pad + ']';
  }
  if (v && typeof v === 'object') {
    const ks = Object.keys(v);
    if (!ks.length) return '{}';
    return '{\n' + ks.map(k => pad1 + (IDENT.test(k) ? k : str(k)) + ': ' + ser(v[k], ind + 1)).join(',\n') + '\n' + pad + '}';
  }
  if (typeof v === 'string') return str(v);
  return JSON.stringify(v);
}

/* ---- assemble ---- */
function readDraft(room, code) {
  const f = path.join(DRAFTS, room, code + '.txt');
  if (!fs.existsSync(f)) return null;
  const map = new Map();
  for (const line of fs.readFileSync(f, 'utf8').split('\n')) {
    if (!line.trim() || line.startsWith('#')) continue;
    const i = line.indexOf('|');
    if (i < 1) continue;
    const id = line.slice(0, i).trim();
    if (!/^\d+$/.test(id)) continue;
    map.set(id, line.slice(i + 1));
  }
  return map;
}
function assemble(room) {
  const TM = readTM();
  const en = enOf(room);
  const L = []; leaves(shape(en), '', L);

  // rebuild the same id assignment the work order used
  const idOf = new Map(); let id = 0;
  for (const [trail, s] of L) {
    if (isFixed(trail, s) || idOf.has(s)) continue;
    if (LANGS.every(c => tmHit(TM, trail, s, c))) { idOf.set(s, null); continue; }
    idOf.set(s, String(++id));
  }

  const problems = [];
  for (const code of LANGS) {
    const draft = readDraft(room, code) || new Map();
    let fromTM = 0, fromDraft = 0, missing = [];
    const pick = (trail, s) => {
      if (isFixed(trail, s)) return s;
      const i = idOf.get(s);
      if (i && draft.has(i)) { fromDraft++; return draft.get(i); }
      const hit = tmHit(TM, trail, s, code);
      if (hit) { fromTM++; return hit; }
      missing.push(i || '?'); return s;
    };
    // deep-clone the en shape, substituting strings
    const build = (o, trail) => {
      if (Array.isArray(o)) return o.map((v, k) => build(v, `${trail}[${k}]`));
      if (o && typeof o === 'object') { const r = {}; for (const k of Object.keys(o)) r[k] = build(o[k], trail ? `${trail}.${k}` : k); return r; }
      if (typeof o === 'string') return pick(trail, o);
      return o;
    };
    const pack = { ui: build(en.ui, 'ui'), content: build(en.content, 'content') };
    if (missing.length) { problems.push(`${code}: ${missing.length} string(s) untranslated (ids ${[...new Set(missing)].slice(0, 6).join(',')}…)`); continue; }

    const title = (en.content.meta || {}).title || room;
    const body = `/* Contraband — ${title} · ${LANG_NAME[code]} (${code}). Machine-assisted; flag for human review. */\n`
      + `window.__ROOM_LANGS__ = window.__ROOM_LANGS__ || {};\n`
      + `window.__ROOM_LANGS__.${code} = ${ser(pack, 0)};\n`;
    // never write a file that does not parse
    try { const c = { window: {} }; vm.createContext(c); vm.runInContext(body, c); if (!c.window.__ROOM_LANGS__[code]) throw new Error('did not register'); }
    catch (e) { problems.push(`${code}: generated file failed to parse — ${e.message}`); continue; }
    fs.mkdirSync(path.join(ROOT, room, 'lang'), { recursive: true });
    fs.writeFileSync(path.join(ROOT, room, 'lang', code + '.js'), body);
    console.log(`  ${code}: ${fromDraft} translated + ${fromTM} from TM  (${(body.length / 1024).toFixed(0)} KB)`);
  }
  if (problems.length) { problems.forEach(p => console.error(`  ✖ ${p}`)); process.exitCode = 1; return; }
  wire(room);
  console.log(`${room}: assembled and wired.`);
}

function wire(room) {
  const f = path.join(ROOT, room, 'index.html');
  let html = fs.readFileSync(f, 'utf8');
  if (/lang\/[a-z]{2}\.js/.test(html)) return;
  const tags = WIRE_ORDER.map(c => `<script src="lang/${c}.js" defer></script>`).join('\n');
  const anchor = '<script src="data.en.js" defer></script>';
  if (!html.includes(anchor)) { console.error(`  ✖ ${room}: no data.en.js script tag to anchor to`); process.exitCode = 1; return; }
  html = html.replace(anchor, anchor + '\n' + tags);
  fs.writeFileSync(f, html);
}

/* ---- cli ---- */
const [cmd, arg] = process.argv.slice(2);
if (cmd === 'tm') buildTM();
else if (cmd === 'order') order(arg);
else if (cmd === 'assemble') assemble(arg);
else { console.error('usage: _i18n_tools.js tm | order <room> | assemble <room>'); process.exit(2); }
