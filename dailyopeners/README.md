# Contraband Daily Opener a Day · October 2026

A static, privacy-first digital flipbook with **31 daily Contraband openers**. Each date features one Contraband title and two differentiated versions of the same opener:

- **Grades 6–8**: notice, predict, connect, discuss, and short-write moves
- **Grades 9–12**: analysis, evidence, counterpoint, context, and thesis moves

The featured books come from the existing Contraband **Grades 6–8 catalog**. That keeps each daily title appropriate for the younger band while allowing the same title to be used with more demanding high-school prompts.

## Install in the Contraband repository

1. Copy this entire folder into the root of the `mglearn/contraband` repository.
2. Keep the folder name as `dailyopeners`.
3. The final URL will be:

   `https://mglearn.github.io/contraband/dailyopeners/`

4. Optionally add this link to the Contraband top navigation:

```html
<a href="dailyopeners/">Daily Openers</a>
```

The site reuses the existing Contraband hero images at `../images/[title-id]/hero.webp` and title rooms at `../[title-id]/`. It does not duplicate the image library.

## Preview locally

Open `index.html` directly. When opened with `file://`, the site automatically points image and book-room links to the public Contraband site.

## Controls

- Left / right arrow keys: previous or next day
- Home / End: October 1 or October 31
- Month: calendar jump view
- Teacher notes: preview reminder
- Grades 6–8 / Grades 9–12 / Both: display filter
- Print day: browser print view
- Full screen: projection mode

## Privacy and accessibility

- No accounts, forms, analytics, or trackers
- No student data collection
- Keyboard navigation and visible focus styles
- Reduced-motion support
- Responsive phone/projector layout
- Existing Contraband art is used decoratively; all required instructional text remains real HTML text

## Files

- `index.html` — page structure
- `styles.css` — Contraband-style flipbook design
- `openers.js` — 31 dates and featured titles
- `app.js` — differentiated prompts, flip navigation, month view, filters, print, and fullscreen controls
- `NAV_LINK.html` — optional navigation link snippet

The daily prompts are original and do not reproduce copyrighted passages from the featured books.
