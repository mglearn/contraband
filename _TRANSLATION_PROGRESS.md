# Room translation progress

Six-language localization (es, vi, ar, hi, ur, zh) of every breakout room.

**Status: 72 of 168 rooms complete.** `_drafts/queue-remaining.txt` lists the
96 rooms still to do, in the order they should be worked.

Run `node _check_translations.js` for the authoritative count at any time.

## Per-room workflow

```bash
export CB_DRAFTS=<some scratch dir>          # where draft files live
node _i18n_tools.js order  <room>            # writes $CB_DRAFTS/<room>/order.txt
#   ... hand-write $CB_DRAFTS/<room>/{es,vi,ar,hi,ur,zh}.txt ...
node _i18n_tools.js assemble <room>          # writes <room>/lang/*.js, wires index.html
node _check_translations.js <room>           # must report 0 issues
git add -A && git commit && git push         # one commit per room; Pages deploys from main
node _i18n_tools.js tm                       # refresh .tm.json translation memory
```

Draft format is one line per order item: `<id>|<translated text>`, with exactly
as many lines as the order file has. Verify before assembling:

```bash
cut -d'|' -f1 xx.txt | tr '\n' ' ' | md5sum      # must equal:
seq 1 <N>          | tr '\n' ' ' | md5sum
```

## Quality gate run on every room

```bash
# cross-script leaks (Hangul/Cyrillic/Thai anywhere; Han in non-zh; Devanagari in
# ur/ar/zh; Arabic in hi/zh/es/vi) — all five must return nothing
grep -nP '[\x{AC00}-\x{D7AF}\x{1100}-\x{11FF}\x{0400}-\x{04FF}\x{0E00}-\x{0E7F}]' *.txt
grep -nP '[\x{4E00}-\x{9FFF}]' es.txt vi.txt ar.txt hi.txt ur.txt
grep -nP '[\x{0900}-\x{097F}]' ur.txt ar.txt zh.txt
grep -nP '[\x{0600}-\x{06FF}]' hi.txt zh.txt es.txt vi.txt
grep -c '"' zh.txt                               # zh must use 「」/“” not straight quotes
```

Then inspect every lock answer in all six languages before committing:

```bash
for l in es vi ar hi ur zh; do grep -oP 'answer: "[^"]*"' <room>/lang/$l.js; done
```

## Conventions established so far

- **Order-file dedup.** If a lock's `answer` is byte-identical to a string already
  in the order, it is omitted from the order — whatever you write for that other
  item *becomes* the answer. (Seen with "spring"/tuckeverlasting, "Stew Cat"/thecay,
  "cerebral palsy" and "nonverbal"/outofmymind.)
- **Numbers stay numeric** (ages, years). `assets/room-engine.js` normalizes
  Arabic-Indic and Extended Arabic-Indic digits, so ar/ur readers can type the
  numerals they see.
- **Common-noun answers are translated** into each language, and the
  "starts with…" hints are rewritten to point at that language's spelling
  (teacher → maestra/giáo viên/معلمة/शिक्षिका/استانی/老师).
- **Proper nouns** stay Latin in es/vi and are transliterated for ar/hi/ur/zh to
  match the prose — unless a hint explicitly names the Latin spelling, in which
  case the name stays Latin in all six (Phoebe, Stew Cat, IT, Chaya, Rivka).
- **Fill-in-the-blank prompts** are rebuilt per language so the blank lands on the
  translated word (Sunshine ___ → أصدقاء الشمس / धूप के साथी / 阳光伙伴).
- **Care notes** (abuse, deportation, the Holocaust, disability, debt bondage)
  keep the source's register of dignity in every language.

## In flight

`warthatsavedme` (The War That Saved My Life) was mid-translation. Its finished
`es.txt` and `vi.txt` drafts are saved in `_drafts/warthatsavedme/`; ar, hi, ur
and zh remain. Regenerate the order file first — the ids must match:

```bash
node _i18n_tools.js order warthatsavedme
cp _drafts/warthatsavedme/*.txt $CB_DRAFTS/warthatsavedme/
```

Decisions already locked in for that room: the pony **Butter** keeps its Latin
name in es/vi and becomes باتر / बटर / بٹر / 黄油 elsewhere (the clue is that the
name is a food spread on bread, so the meaning has to survive); **Susan** →
سوزان / सूज़न / سوزن / 苏珊 with surname Smith transliterated; the year **1939**
stays numeric.
