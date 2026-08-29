# Contraband — Image Generation Spec

Images are **optional** — every page renders cleanly without them (rooms show labeled
placeholders; hub/gallery cards fall back to a dark cover; posters fall back to a dark
layout). Add images to enrich rooms, hub cards, and posters.

## ✅ Already done — do NOT regenerate
The original 27 titles all have images, and the 5 PlotPoint-linked titles (annefrank,
huckfinn, kindred, bnw, butterflies) reuse their existing PlotPoint hero art. Roll of
Thunder keeps its own set under `rollofthunder/images/`.

## ⚠️ Hard rules (bake into every prompt)
1. **No real people's likenesses** — never the actual author or any identifiable real
   person. People in scenes must be representative and non-identifiable (from behind, in
   silhouette, cropped, middle-distance).
2. **No cover art or character designs** — depict themes and settings, not any book's own
   artwork. Especially the graphic novels (Maus, New Kid, Persepolis, March).
3. **"Features the title/author" = typography overlay** added by the page, never rendered
   by the image model.
4. **Dignity, not spectacle** — hard histories: evoke, never depict, trauma. No gore.
5. Photoreal, documentary/editorial style; period-accurate; natural light; one warm accent
   (banned-stamp red #c1272d or amber #d99400).
- **Negative prompt (append to every generation):** `no text, no watermark, no book cover,
  no recognizable real person, no celebrity likeness, no logos, no gore, no cartoon, no
  distorted hands, no lettering`.

## Deliverables, sizes & filenames (WebP), per title under `images/<id>/`
| Use | Size | Ratio | Filename |
|---|---|---|---|
| Room hero | 1024×1024 | 1:1 | `images/<id>/hero.webp` |
| Hub card / gallery thumb | 1200×1600 | 3:4 | `images/<id>/card.webp` |
| Poster background | 1632×2112 | 8.5:11 | `images/<id>/poster-bg.webp` |

(Relic-artifact images are optional; without them the Relic Room shows labeled placeholders.)

## Prompt template
> Photorealistic documentary photograph evoking **[SCENE]**, [period/place]. Representative,
> non-identifiable people [from behind / silhouette / cropped] or none. Natural light, filmic
> color, shallow depth of field, editorial photography. One warm accent of [red/amber]. Serious,
> humane mood. — *no text, no watermark, no book cover, no recognizable real person, no logos,
> no gore, no cartoon, no lettering.*

---

## 🎯 Titles that still need images (generate hero + card + poster-bg for each)

**Sample room**
- **douglass** — a weathered spelling book and a length of broken chain on rough plank boards, a shaft of dawn light through a barn slat; 1830s Maryland. (evoke; no people, no violence)

**Dystopia & censorship**
- **fahrenheit451** — a heap of open books catching fire, embers rising into a black sky; a fireman's helmet in silhouette. (no readable text)
- **nineteeneightyfour** — a huge watching-eye poster on a grey concrete wall above an empty rain-slicked plaza; one tiny figure far below.
- **animalfarm** — a red barn at dusk, a faded painted commandment peeling on the wall, a pig's silhouette upright in the doorway.
- **handmaidstale** — rows of red cloaks and white bonnets seen from behind against a cold grey institutional wall (faces hidden).
- **lordoftheflies** — a pale conch shell on a darkening tropical beach, a thin column of signal-fire smoke in the distance; no people.
- **slaughterhouse** — the ruins of a firebombed city under a cold flat sky; a single pocket watch half-buried in rubble. (evoke; no bodies)

**Black experience & justice**
- **colorpurple** — a rural Georgia porch at golden hour, a stack of letters tied with twine, purple wildflowers in a mason jar; no people.
- **beloved** — a weathered clapboard farmhouse at cold blue dusk, a single small child's shoe on the porch step. (evoke; never depict harm)
- **raisininthesun** — a small crowded 1950s Chicago apartment window, a struggling potted plant straining toward a thin sliver of daylight.
- **nativeson** — a 1930s Chicago tenement street in winter, snow and coal soot, one lit window in a wall of dark ones.
- **longwaydown** — the interior of an old apartment elevator, numbered floor buttons glowing, a shadowed figure. (no weapon visible; evoke)
- **dearmartin** — a handwritten letter beginning "Dear Martin" on a desk beside a college pennant, faint red-and-blue light bleeding through a window.
- **monster** — an empty courtroom gallery bench and a film clapperboard on a table under harsh overhead light. (screenplay motif)
- **march** — an empty segregation-era lunch counter with chrome stools at dawn, a folded newspaper on the counter; no people, no artwork.

> As additional bundles (Identity & coming-of-age; History & memory) ship, this list will be
> updated with their seeds. Any title whose `images/<id>/hero.webp` is absent still needs art.

## Workflow
1. Generate hero + card + poster-bg per title from the seeds above → WebP.
2. Drop into `images/<id>/`.
3. The site picks them up automatically (hero in the room; card on hub + gallery; poster-bg
   behind the printable poster). No code changes needed.
