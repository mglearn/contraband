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

---

# Expansion — 100 more banned/challenged titles (image needs by grade band)

A curated backlog of widely-read, frequently-challenged books **not yet in the catalog**.
**Each title needs three images** — `hero.webp` (1024×1024), `card.webp` (1200×1600), and
`poster-bg.webp` (1632×2112) — under `images/<id>/`, following the Hard Rules above (no real
people, no cover art, no lettering; photoreal, dignified, one warm accent). Seeds below are for
the hero; reuse the same scene, recropped, for card and poster-bg. `(M)` = mature content —
confirm suitability before building.

## Grades 6–8 (38)
- **holes** — a cracked desert lakebed at dusk, a shovel beside one dug hole.
- **theoutsiders** — a 1960s small-town vacant lot at dusk, a switchblade and a denim jacket on a chain-link fence.
- **tuckeverlasting** — a hidden woodland spring in dappled light, a small music box on moss.
- **wrinkleintime** — a folding starfield over a dark hill with one lit farmhouse window.
- **lightningthief** — a storm over Greek-columned ruins, a bronze pen resting on stone.
- **harrypotter1** — a candlelit stone corridor, an owl on a windowsill (no characters, no logos).
- **maniacmagee** — a small-town railroad track and a worn baseball at dawn.
- **stargirl** — a desert high-school courtyard at golden hour, a ukulele on a bench.
- **walktwomoons** — a long western highway at sunrise, a single hiking boot and wildflowers.
- **blubber** — an empty middle-school hallway, a crumpled note on the tile floor.
- **margaret** — a suburban bedroom window at dusk, a diary on the sill.
- **tigereyes** — a New Mexico canyon at golden hour, a lone figure in silhouette.
- **freakthemighty** — a backyard at dusk, a homemade crutch and a thick dictionary.
- **drama** — an empty school-theater stage, a paint can and a rolled script (no artwork copied).
- **smile** — an orthodontist's chair and a hand mirror under bright light (no artwork copied).
- **ghosttrack** — a worn running shoe on a track at dawn, one lane lit. (Ghost, Jason Reynolds)
- **outofmymind** — a communication board and a wheelchair by a sunlit classroom window.
- **islandbluedolphins** — a rocky Pacific island shore, a carved spear and abalone shells.
- **mybrothersam** — a Revolutionary-era tavern doorway at night, a musket by the hearth.
- **thecay** — a tiny Caribbean cay, driftwood and a coil of rope (no people).
- **sounder** — a sharecropper's cabin at dusk, an empty dog chain in the yard.
- **witchblackbird** — a colonial New England meadow and pond at dawn.
- **whenyoureachme** — a 1970s New York street corner, a mailbox and a folded note.
- **warthatsavedme** — a wartime English-countryside cottage, a child's crutch and a pony at the gate.
- **fever1793** — 1790s Philadelphia cobblestones, a shuttered coffeehouse at dusk.
- **longwaytowater** — a cracked Sudanese plain, a plastic water jug and a distant well.
- **frontdesk** — a small roadside-motel office at night, a service bell on the counter.
- **amalunbound** — a Pakistani village lane at dusk, an open book and a folded shawl.
- **mercisuarez** — a Florida driveway and mango tree at golden hour, a bicycle leaning by.
- **skinimin** — an urban schoolyard, a mirror reflecting a girl's silhouette.
- **crash** — a suburban football field at dusk, a fallen helmet on the grass.
- **hoot** — a Florida construction lot at dawn, a burrowing-owl hole and survey stakes.
- **blended** — a piano and two house keys resting on a music stand.
- **efrendivided** — an East LA apartment kitchen at dawn, a lunch bag and a bus pass.
- **seedfolks** — a vacant urban lot becoming a garden, seedlings in a coffee can.
- **flowersforalgernon** — a small lab maze, a pencil and a fading test paper.
- **thehobbit** — a round green door set in a grassy hillside at dawn (no logos, no characters).
- **tangerine** — a Florida subdivision beside a smoking muck fire, a soccer ball at dusk.

## Grades 9–12 (62)
- **catcherintherye** — a wintry Central Park bench and a red hunting cap.
- **grapesofwrath** — a Dust Bowl highway, a loaded jalopy silhouetted at dusk.
- **chocolatewar** — an empty Catholic-school hall, a box of unsold chocolates.
- **iamthecheese** — a lone bicycle on a long grey road.
- **separatepeace** — a New England prep-school river and a bare winter tree.
- **thousandsplendidsuns** — a Kabul courtyard at dusk, two teacups and a headscarf.
- **songofsolomon** — a rural Michigan road and open field, a man's hat on a fence post.
- **invisibleman** — a basement strung with many glowing lightbulbs.
- **blackboy** — a Jim Crow-era southern train platform at dusk (no people).
- **gotellit** — a Harlem storefront church at dawn, a worn Bible on a pew.
- **bealestreet** — a 1970s Harlem street at dusk, two clasped hands (cropped).
- **betweentheworld** — a handwritten letter on a desk by a window, city lights beyond.
- **newjimcrow** — prison-yard fencing against a wide flat sky (no people).
- **malcolmx** — a 1960s lectern and horn-rimmed glasses under a spotlight (no likeness).
- **lessonbeforedying** — a rural Louisiana schoolhouse and a barred jail window at dusk.
- **tomsawyer** — a whitewashed fence and a Mississippi riverbank at noon.
- **scarletletter** — a Puritan scaffold in a grey square, an embroidered "A" on cloth.
- **theawakening** — a Gulf-coast shore at dusk, a woman's dress left on the sand.
- **greatgatsby** — a green dock light across dark water, a Jazz-Age mansion glowing.
- **farewelltoarms** — a WWI Italian field hospital, rain on a tall window.
- **catch22** — a WWII bomber airfield at dawn, a lone flight jacket on a cot.
- **cuckoosnest** — a stark psychiatric-ward window of wire-reinforced glass.
- **clockworkorange** — a brutalist concrete underpass at night, a bowler hat (no logos). (M)
- **catscradle** — a string cat's-cradle between two hands, an icy landscape beyond.
- **thecrucible** — a Puritan meetinghouse and a coil of rope at dusk.
- **streetcar** — a humid New Orleans French-Quarter balcony at night.
- **glassmenagerie** — a shelf of tiny glass animals catching lamplight.
- **deathofsalesman** — a salesman's suitcase and hat under a lone streetlight.
- **fences** — a 1950s Pittsburgh backyard, a half-built fence and a baseball bat.
- **funhome** — a small-town funeral-home parlor doorway at dusk (no artwork copied). (M)
- **thebookthief** — a WWII German street, a single rescued book on snowy cobbles.
- **allquiet** — a muddy WWI trench at dawn, a helmet resting on a rifle.
- **whenemperordivine** — a WWII internment barrack and a single claimed suitcase.
- **longwaygone** — a West African road at dusk, worn sneakers and a cassette tape.
- **iammalala** — a Swat Valley schoolyard and an open book (no likeness).
- **purplehibiscus** — a Nigerian courtyard, purple hibiscus against a whitewashed wall.
- **halfyellowsun** — a 1960s Biafran roadside at dusk (evoke; no violence).
- **thingsfallapart** — an Igbo village compound at dawn, yam mounds and a drum.
- **crybelovedcountry** — the South African veld hills at dawn.
- **houseofspirits** — a grand crumbling Latin-American house at dusk.
- **hundredyears** — a jungle-edged town, yellow butterflies over an open doorway.
- **likewaterchocolate** — a rustic Mexican kitchen, dried chiles and a bubbling pot.
- **thealchemist** — a shepherd's crook and a Saharan dune at dawn.
- **thejungle** — a grim early-1900s meatpacking yard at dawn (evoke; no gore).
- **onedayivan** — a snowbound gulag fence at dawn.
- **thepearl** — a Baja fishing-village shore, a single pearl in a cupped hand (cropped).
- **easteden** — a Salinas Valley farm road at golden hour.
- **thebelljar** — a 1950s New York hotel window, a single fig on the sill. (M)
- **thingstheycarried** — a Vietnam-era rucksack and dog tags on jungle ground.
- **blessmeultima** — a New Mexico llano at dusk, an owl on an adobe wall.
- **womanwarrior** — a misty Chinese-American courtyard, a sword and a calligraphy brush.
- **joyluckclub** — a mahjong table and four teacups in warm lamplight.
- **bastardcarolina** — a rural Carolina porch at dusk (evoke). (M)
- **crank** — shattered glass on wet asphalt under a streetlight. (M)
- **goaskalice** — a 1970s diary and a bus ticket on a rumpled bed. (M)
- **thirteenreasons** — a shoebox of cassette tapes and a folded map (evoke). (M)
- **lookingforalaska** — a boarding-school dorm window and a stack of unlit cigarettes. (M)
- **faultinstars** — an Amsterdam canal at dusk, two bikes and an oxygen tank.
- **eleanorpark** — a 1980s school-bus seat, a comic and a mixtape (no artwork copied).
- **forever** — a suburban bedroom window at dusk, a locket on a chain. (M)
- **the57bus** — an Oakland city bus at dusk (no people).
- **concreterose** — a city stoop at golden hour, a single rose growing from a crack in concrete.

## Outstanding generation queue

None. Every catalog title now has its required shared artwork, except `rollofthunder`, whose room-local art is intentionally used directly.

## Completed in the image audit

- **melissa** — generated a text-free, person-free school-stage scene and exported the required hero, card, and poster crops.
- **separate** — reused the approved local room hero showing unequal neighboring schools and exported the required shared hero, card, and poster crops.
- **CCHS companion rooms** — reused the approved local room heroes and exported correctly sized shared hero, card, and poster assets for `notesmidnightdriver`, `oldmansea`, `blackships`, `boywhoharnessed`, `intothewild`, `survivorguilt`, `journeyintoself`, `whywetellstories`, `herosjourney`, `dangersinglestory`, and `howtomarkabook`.
- **Final generation queue** — generated and audited text-free, person-free source art plus all required crops for `speak`, `poetx`, `perks`, `kiterunner`, `ofmiceandmen`, `thegiver`, `refugee`, `breadwinner`, `devilsarithmetic`, `chains`, `theycalledusenemy`, `budnotbuddy`, and `bridgetoterabithia`.
- **Legacy PlotPoint crops** — retained the approved hero artwork for `annefrank`, `bnw`, `butterflies`, `huckfinn`, and `kindred`, while re-exporting their card and poster files at the required portrait dimensions.
