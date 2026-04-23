# 2026-04-23 · Local images and photo carousel

All images migrated to `assets/images/` so the site runs fully offline with
no dependency on `westlakenlp.com`. A photo carousel pulled from the team
page slider is now displayed on the home page.

## Changes

### Image localisation

- Created `assets/images/` directory.
- Downloaded all 28 image files from `westlakenlp.com/wp-content/uploads/`:
  - Lab emblem (`sch-300x300.png`)
  - 2 carousel slides from Smart Slider 3 cache, saved as `slide1.jpg` / `slide2.jpg`
  - 1 faculty photo
  - 3 postdoc photos
  - 17 PhD student photos
  - 4 research assistant photos
- Updated all `<img src>` attributes in `index.html` and `team.html` to point
  to `assets/images/…` instead of remote URLs.
- Updated `<link rel="icon">` in `index.html` to use the local copy.

### Photo carousel on home page

- Added a new "Lab Life / A glimpse of the team" section in `index.html`,
  placed between the hero and the "About the Lab" section.
- Carousel shows the two team photos that previously only appeared on the
  WordPress team page slider. Auto-advances every 8 seconds; prev/next
  buttons and dot indicators allow manual navigation.
- Carousel CSS (`.carousel`, `.carousel-track`, `.carousel-slide`,
  `.carousel-btn`, `.carousel-dots`) added to `assets/css/components.css`.
- Self-contained carousel JS (no external library) appended inline in
  `index.html` before `</body>`.

## Files touched

| File | Change |
|---|---|
| `assets/images/` | new directory with 28 image files |
| `index.html` | local favicon, local emblem, new carousel section + JS |
| `team.html` | all 26 `<img src>` URLs replaced with local paths |
| `assets/css/components.css` | carousel component styles added |
