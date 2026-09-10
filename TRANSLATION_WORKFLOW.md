# Translating a room

Six target languages: **ar, es, hi, ur, vi, zh**. English (`data.en.js`) is the
source. A room is finished when `lang/` holds all six packs, `index.html` loads
them, and `node _check_translations.js <room>` is clean.

## Why there is tooling

Packs are **generated, never hand-written**. A hand-written pack once shipped with
Chinese text using straight `"` as inner quotation marks, which closed the JS
string and broke the file (`perks/lang/zh.js`). `_i18n_tools.js` serializes and
escapes every string, and refuses to write a file that does not parse.

Roughly 40% of a room's strings — chrome, nav, print labels, ACE scaffolding —
are identical to strings already translated in finished rooms. Those are reused
from a translation memory instead of being retranslated.

## The three steps

```bash
export CB_DRAFTS=/some/scratch/dir          # drafts stay out of the repo
node _i18n_tools.js tm                      # mine finished rooms into .tm.json
node _i18n_tools.js order <room>            # -> $CB_DRAFTS/<room>/order.txt
#   translate order.txt into $CB_DRAFTS/<room>/<code>.txt as `id|text` lines
node _i18n_tools.js assemble <room>         # writes lang/*.js + wires index.html
node _check_translations.js <room>          # verify
```

`assemble` fails loudly rather than shipping a half-pack: if any id is missing
for a language, that language is skipped and reported.

## Translation memory rules

- Reuse is keyed on **path + English string** first (so "memory" as a vocabulary
  term never picks up the translation of `arcade.buckets[].id`, an internal
  join key), falling back to a bare string match only when every finished room
  agrees on one rendering.
- A reuse candidate identical to its English source is **rejected** — that means
  some earlier room left the string untranslated, and it should not spread.

## Never translated

Derived from the 52 finished rooms — identical in every room and language:

`meta.hero` `meta.id` `meta.gutenberg` `meta.audio` `meta.storageKey`
`relic.artifacts[].id` `relic.artifacts[].image` `ctob.locks[].type`
`arcade.buckets[].id` `arcade.cards[].bucket` `standards.ccss[]`

`meta.title` and `meta.author` also stay in Latin script; Chinese wraps the title
as 《Title》 when it appears in running text.

## House style

- Header: `/* Contraband — <Title> · <Language> (<code>). Machine-assisted; flag for human review. */`
- Keep `{n}`, `{total}`, `{a}` placeholders exactly as they appear in English.
- Arabic uses Arabic-Indic numerals for grades and durations (`الصفوف ٦–٨`).
- Grade-appropriate register: these rooms are for grades 6–12, so translate for
  a student reader, not a formal/legal one.
- `ctob.locks[].answer` is what a student types — translate it, but leave proper
  nouns (place and character names) as they stand in the novel.
