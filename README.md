# Contraband

**The freedom to read — grades 6–12.** A library of learning rooms built on the
books that schools keep trying to ban: widely-taught works on real history,
social justice, and identity. The answer to a banned book is to read it, together.

Live at: `mglearn.github.io/activities/contraband/` (part of the `mglearn/activities` repo).

## What this is
A standalone site that **reuses the PlotPoint room engine**. The hub
(`index.html`) is driven by a single catalog (`titles.js`); each title becomes a
self-contained learning room under `rooms/<id>/` (or links to an existing
PlotPoint room for shared titles).

## Structure
```
contraband/
├── index.html              # the hub — filterable catalog (grade band / theme / status)
├── about.html              # mission, title-selection criteria, copyright stance
├── titles.js               # the catalog (single source of truth)
├── copyright-disclaimers.md# per-title companion disclaimers for copyrighted works
├── assets/                 # engine, shared with PlotPoint
│   ├── room-engine.js
│   ├── plotpoint.css
│   └── copyright-gate.js
└── rooms/                  # new Contraband-original rooms live here, one dir per id
```

## Catalog (`titles.js`)
Each entry: `id, title, author, year, gradeBand ("6-8"|"9-12"), grades, themes[]
(justice|history|identity|power), rights (public-domain|copyrighted), status
(available|building), href, why`. Flip `status` to `"available"` and set `href`
when a room ships.

Five titles are **available now**, pointing at existing PlotPoint rooms
(Anne Frank, Huckleberry Finn, Kindred, In the Time of the Butterflies, Brave New
World). The rest are `building`.

## Building a room for a copyrighted title
These books are copyrighted, so rooms are **independent educational companions**:
- Build one title at a time. The teacher/author **pastes the source text** in-session
  so plot, character, and sequence details are verified — used only as private
  reference, **never reproduced**.
- Published room is **paraphrase-only, quotation-free**, fully transformative.
- Set `meta.rights: "Copyrighted"`, add a strong `meta.contentNote`, include the
  title's disclaimer from `copyright-disclaimers.md`, and **omit** any
  Gutenberg/audio "get the text" links.
- Correct answer is index 0 in every choices array; the engine shuffles.

See `../plotpoint/annefrank/` and `../plotpoint/kindred/` as reference rooms.

## Naming / branding
Wordmark: **CONTRA[BAND]** — "BAND" set in a redaction bar that reveals on hover.
Palette: aged paper + ink, a banned-stamp red (`#c1272d`), warning amber
(`#d99400`). Type: Archivo Black (display), Spectral (serif reading), Inter (UI).
