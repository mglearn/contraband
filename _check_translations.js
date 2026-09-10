#!/usr/bin/env node
/* Contraband — translation audit.
   Loads each room's data.en.js and lang/<code>.js in a sandbox and compares the
   deep key structure of `ui` and `content`. Reports missing keys, extra keys,
   shape mismatches (array length / type), and untranslated (identical-to-English)
   string ratios. Also checks that index.html wires every lang pack it ships.

   Usage: node _check_translations.js [room …]   (no args = every room) */
const fs = require('fs'), path = require('path'), vm = require('vm');

const LANGS = ['ar', 'es', 'hi', 'ur', 'vi', 'zh'];
const root = __dirname;

function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  return ctx.window;
}

/* Walk two parallel structures, collecting problems. */
function compare(en, tr, trail, out) {
  const at = trail || '(root)';
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) { out.shape.push(`${at}: expected array, got ${typeof tr}`); return; }
    if (en.length !== tr.length) out.shape.push(`${at}: array length ${tr.length} ≠ ${en.length}`);
    en.forEach((v, i) => { if (i < tr.length) compare(v, tr[i], `${at}[${i}]`, out); });
    return;
  }
  if (en && typeof en === 'object') {
    if (!tr || typeof tr !== 'object' || Array.isArray(tr)) { out.shape.push(`${at}: expected object, got ${Array.isArray(tr) ? 'array' : typeof tr}`); return; }
    Object.keys(en).forEach(k => {
      if (!(k in tr)) out.missing.push(`${at}.${k}`);
      else compare(en[k], tr[k], `${at}.${k}`, out);
    });
    Object.keys(tr).forEach(k => { if (!(k in en)) out.extra.push(`${at}.${k}`); });
    return;
  }
  if (typeof en === 'string') {
    if (typeof tr !== 'string') { out.shape.push(`${at}: expected string, got ${typeof tr}`); return; }
    out.strings++;
    // Ignore strings with no letters (numbers, punctuation, emoji) — nothing to translate.
    if (/[a-zA-Z]/.test(en)) {
      out.translatable++;
      if (en.trim() === tr.trim()) out.identical.push(at);
    }
    // Placeholder tokens like {n} must survive translation.
    const toks = s => (String(s).match(/\{[^}]+\}/g) || []).sort().join(',');
    if (toks(en) !== toks(tr)) out.tokens.push(`${at}: {${toks(en)}} → {${toks(tr)}}`);
  }
}

const rooms = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(root).filter(d => fs.existsSync(path.join(root, d, 'data.en.js'))).sort();

let clean = 0, issues = 0, absent = 0;
const summary = [];

for (const room of rooms) {
  const dir = path.join(root, room);
  const langDir = path.join(dir, 'lang');
  if (!fs.existsSync(langDir)) { absent++; summary.push({ room, state: 'none' }); continue; }

  let en;
  try { en = load(path.join(dir, 'data.en.js')).__ROOM__; }
  catch (e) { console.log(`✖ ${room}: data.en.js failed to parse — ${e.message}`); issues++; continue; }

  const html = fs.existsSync(path.join(dir, 'index.html')) ? fs.readFileSync(path.join(dir, 'index.html'), 'utf8') : '';
  const roomProblems = [];

  for (const code of LANGS) {
    const f = path.join(langDir, `${code}.js`);
    if (!fs.existsSync(f)) { roomProblems.push(`${code}: file missing`); continue; }
    let pack;
    try { pack = load(f).__ROOM_LANGS__?.[code]; }
    catch (e) { roomProblems.push(`${code}: parse error — ${e.message}`); continue; }
    if (!pack) { roomProblems.push(`${code}: file did not register window.__ROOM_LANGS__.${code}`); continue; }

    const out = { missing: [], extra: [], shape: [], identical: [], tokens: [], strings: 0, translatable: 0 };
    compare({ ui: en.ui, content: en.content }, { ui: pack.ui, content: pack.content }, '', out);

    const bits = [];
    if (out.missing.length) bits.push(`${out.missing.length} missing (${out.missing.slice(0, 3).join(', ')}${out.missing.length > 3 ? ', …' : ''})`);
    if (out.shape.length) bits.push(`${out.shape.length} shape (${out.shape.slice(0, 2).join('; ')}${out.shape.length > 2 ? '; …' : ''})`);
    if (out.tokens.length) bits.push(`${out.tokens.length} placeholder drift (${out.tokens.slice(0, 2).join('; ')})`);
    if (out.extra.length) bits.push(`${out.extra.length} extra`);
    const pct = out.translatable ? (out.identical.length / out.translatable) : 0;
    if (pct > 0.15) bits.push(`${(pct * 100).toFixed(0)}% still English (${out.identical.length}/${out.translatable})`);
    if (!html.includes(`lang/${code}.js`)) bits.push('not wired in index.html');
    if (bits.length) roomProblems.push(`${code}: ${bits.join('; ')}`);
  }

  if (roomProblems.length) {
    console.log(`✖ ${room}`);
    roomProblems.forEach(p => console.log(`    ${p}`));
    issues++; summary.push({ room, state: 'issues' });
  } else { clean++; summary.push({ room, state: 'ok' }); }
}

console.log(`\n${clean} room(s) fully translated & clean · ${issues} with issues · ${absent} with no translations · ${rooms.length} total`);
process.exit(issues ? 1 : 0);
