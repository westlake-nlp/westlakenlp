# 2026-04-23 · Carousel fix, logo image, mobile responsive

Follow-up to the carousel and image localisation work to address display
bugs and improve mobile usability.

## Changes

### Site logo

- Replaced the CSS-generated gradient "W" badge (`.brand-mark`) with the
  actual school emblem image `assets/images/sch-300x300.png`.
- Updated `assets/js/partials.js`: brand now uses `<img class="brand-logo">`
  instead of `<span class="brand-mark">`.
- Updated `assets/css/components.css`: removed `.brand-mark` rule, added
  `.brand-logo { width:28px; height:28px; border-radius:6px; object-fit:contain }`.

### Carousel — full image display

- Previous approach (`aspect-ratio: 3/2` + `height: 100%` chain + `object-fit: contain`)
  caused images to be clipped in some browsers due to height inheritance issues.
- New approach: container has no fixed height; images use `width: 100%; height: auto`
  so their natural 1920×1280 (3:2) dimensions drive the container height.
  No cropping possible.
- Removed `aspect-ratio`, `height: 100%` on track and slides, and `object-fit`.

### Carousel — section heading removed

- Removed the "Lab Life" eyebrow and "A glimpse of the team" `<h2>` from
  `index.html`; the carousel now appears without a text header.

### Mobile & tablet responsive

Added two new media query blocks in `assets/css/components.css`:

**≤ 760 px (tablet/large phone)**
- Section vertical padding reduced to 48 px.
- Carousel arrow buttons enlarged to 36×36 px for easier tap targets.
- Dot indicators enlarged slightly.

**≤ 520 px (small phone)**
- Container padding reduced to 16 px, header height to 56 px.
- Section padding reduced to 36 px.
- Hero lead font size and actions gap tightened.
- Stats numbers scaled down; stats padding reduced.
- News list collapses to single column (date no longer shown separately).
- Carousel arrows reduced to 30×30 px and pulled closer to edges.
- Footer margin and padding reduced.

## Files touched

| File | Change |
|---|---|
| `assets/js/partials.js` | brand img tag instead of span |
| `assets/css/components.css` | `.brand-logo` rule; carousel height fix; mobile media queries |
| `index.html` | carousel section-head removed |
