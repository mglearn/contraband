# Contraband — Image Generation Spec

Images are **optional** — every Contraband page renders cleanly without them (the room
engine shows labeled placeholders; the hub uses CSS covers; posters are typographic).
Add images only to enrich rooms, hub cards, and posters.

## ⚠️ Hard rules (read first)
These keep the images legally safe and on-brand. Bake them into **every** prompt.

1. **No real people's likenesses.** Never depict the actual author or any real,
   identifiable person — no photoreal faces of Angie Thomas, Jerry Craft, Jason
   Reynolds, Ibram X. Kendi, Sherman Alexie, Marjane Satrapi, Elie Wiesel, Maya
   Angelou, etc. Right-of-publicity and deepfake risk. People in scenes must be
   **representative and non-identifiable** (invented, generic, often shot from
   behind, in shadow, cropped, or middle-distance).
2. **No cover art or character designs.** Do not reproduce or imitate any book's
   published cover, its illustrations, or its distinctive character designs —
   especially the graphic novels (*Maus*, *New Kid*, *Persepolis*). Depict the
   **themes and settings**, not the book's own artwork.
3. **"Features the title and author" = typeset text overlay**, not a face. The book
   title and author name are added as **typography** on top of the image (see
   Poster spec), never rendered by the image model (models misspell text).
4. **Photoreal scenes are fine; photoreal *authors* are not.** Period-accurate,
   documentary-style photography of places, objects, hands, silhouettes, and
   crowds is the target look.
5. **Dignity, not spectacle.** These are hard histories. No gore, no graphic
   violence, no exploitation. Evoke, don't depict, trauma.

## Global style
- **Look:** photorealistic, documentary / editorial photography; natural light;
  filmic color; period-accurate to the book's setting; shallow depth of field.
- **Mood:** serious, warm, human, hopeful-under-pressure — matches the Contraband
  ethic (the freedom to read).
- **Palette anchors:** aged paper, ink, a banned-stamp red (#c1272d), warning amber
  (#d99400) — let one accent glow in each frame.
- **Negative prompt (append to every generation):** `no text, no watermark, no book
  cover, no recognizable real person, no celebrity likeness, no logos, no gore, no
  cartoon, no distorted hands, no lettering`.

## Deliverables, sizes & filenames
Generate as **WebP**. Place per-room images under `<roomid>/images/`.

| Use | Size | Ratio | Filename |
|---|---|---|---|
| Room hero | 1024×1024 | 1:1 | `<roomid>/images/hero.webp` |
| Relic artifacts (7) | 1024×1024 | 1:1 | `<roomid>/images/<artifactId>.webp` |
| Hub card cover (optional) | 1200×1600 | 3:4 | `<roomid>/images/card.webp` |
| Poster background (optional) | 1632×2112 | 8.5:11 | `<roomid>/images/poster-bg.webp` |

Artifact IDs are defined in each room's `data.en.js` under `content.relic.artifacts[].id`
(e.g. Roll of Thunder: `reader, road, deed, packard, fire, morrison, cotton`).

## Prompt template (hero)
> Photorealistic documentary photograph evoking **[THEME/SETTING]**, [time period],
> [place]. [Key objects / environment]. Representative, non-identifiable people
> [seen from behind / in silhouette / cropped]. Natural light, filmic color, shallow
> depth of field, editorial photography. One warm accent of [red / amber]. Serious,
> humane mood. — *no text, no watermark, no book cover, no recognizable real person,
> no logos, no gore, no cartoon, no lettering.*

## Poster spec (title + author)
Two options:
- **Recommended:** keep the current **pure-typography** poster (`posters/poster.html`)
  — no image needed, prints crisp, zero legal surface. The title and author are the
  design.
- **If you want a photo background:** generate `poster-bg.webp` (8.5:11) as a muted,
  low-contrast thematic scene, then let the poster page lay the **title, author,
  summary, and ACE panel** over it as typographic overlay. The model must render
  **no text** — all words are added by the page.

## Per-title hero "scene seeds"
One safe, photoreal, title/author-free scene per book. Feed each into the hero
template. (Public-domain-safe: still avoid cover/character imitation.)

**Grades 6–8**
- **rollofthunder** — a red Mississippi dirt road at dusk past cotton fields toward a lone farmhouse, gathering storm, 1930s.
- **watsons** — a 1963 family sedan on an open southern highway, church in the far distance, warm afternoon light.
- **numberthestars** — a child's hand holding a small pressed flower on a cobbled Copenhagen street at night, 1943, one lit window.
- **browngirl** — a 1970s front porch between a southern field and a northern brownstone, an open notebook and pencil on the step.
- **newkid** — a sketchbook and colored pencils on a subway seat, a school blazer folded beside it, morning commute (no characters copied).
- **esperanza** — dawn over a Depression-era California farm-labor camp, rows of grapevines, a single rose in a tin cup.
- **insideout** — a small suitcase and a papaya on a departure dock, Saigon 1975 harbor haze, one amber sunrise.
- **ghostboys** — an empty playground at dusk, a bicycle on its side, soft blue twilight, one warm streetlight (evoke, never depict harm).

**Grades 9–12**
- **mockingbird** — a small 1930s Alabama courthouse square at golden hour, an empty porch swing, a mockingbird on a wire.
- **night** — a cold train platform at night, a single worn shoe on the rails, faint snow, one distant lamp (evoke, never depict violence).
- **maus** — an old photograph, a train ticket, and reading glasses on a dark table (no mice, no panels, no cover art).
- **bluesteye** — a 1940s Ohio storefront window reflecting a girl's silhouette, marigold seeds in a paper packet, autumn light.
- **theireyes** — a dirt road through early-1900s Florida, a blossoming pear tree, a woman's silhouette walking toward the horizon.
- **cagedbird** — a segregated-era southern general store and a caged songbird by an open window, morning light through dust.
- **parttimeindian** — a reservation road meeting a small-town highway, a battered bicycle, a cartoon pencil and paper (no character art).
- **hateugive** — a candle-and-flower memorial on a city sidewalk at night, a raised hand in soft focus, one red glow.
- **allamericanboys** — two school hallways meeting, a basketball and a spray-can shadow on brick, harsh fluorescent light.
- **stamped** — a stack of history books and a bold red bookmark on a desk, chalkboard behind, editorial still-life.
- **justmercy** — an empty courtroom gallery bench and a shaft of light through tall windows, a folded legal file.
- **mangostreet** — a modest Chicago walk-up with four windows, a young woman's silhouette on the stoop, warm dusk.
- **persepolis** — a Tehran rooftop at night during the revolution, laundry lines and a distant flag, one amber window (no character art).
- **manzanar** — a WWII internment-camp barrack against the Sierra Nevada, a paper crane on a windowsill, dust and long shadows.

For the five rooms that link to PlotPoint (annefrank, huckfinn, butterflies,
kindred, bnw), reuse their existing PlotPoint images — no new art needed.

## Workflow
1. Generate hero + 7 relic images per room from the seeds above.
2. Convert to WebP, drop into `<roomid>/images/`.
3. The engine picks them up automatically (no code change); placeholders vanish.
