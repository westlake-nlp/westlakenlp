# 2026-04-22 · Restructure &amp; cleanup

Follow-up to the initial release to make the repo easier to maintain, fix image
quality, and remove remaining Chinese-language content.

## Repository architecture

### Before

```
westlakenlp.com/
├── index.html
├── team.html
├── publications.html     (617 lines — content + data entangled)
├── teaching.html
├── work.html
├── homepage.html         (empty leftover)
├── assets/
│   ├── css/style.css     (781-line monolith)
│   └── js/main.js
└── LOG/
    └── CHANGELOG.md
```

### After

```
westlakenlp.com/
├── index.html            (content only, ~170 lines)
├── team.html
├── publications.html     (~35-line template — data loaded from JS)
├── teaching.html
├── work.html
├── assets/
│   ├── css/
│   │   ├── base.css       (design tokens, reset, typography, utilities)
│   │   └── components.css (layout, header, nav, cards, team, pubs, footer)
│   └── js/
│       ├── partials.js     (shared HEADER_HTML / FOOTER_HTML)
│       ├── publications.js (bibliographic data as window.PUBLICATIONS)
│       └── main.js         (nav, filter, render, reveal)
└── LOG/
    ├── 2026-04-22-001-initial-release.md
    └── 2026-04-22-002-restructure-and-cleanup.md
```

## Changes

### Structure

- **Removed duplicated header/footer markup** &mdash; moved to `partials.js` and
  injected with `document.write(window.SITE.HEADER_HTML)`. No build step, no
  flash of unstyled content, works from `file://`.
- **Extracted publications data** &mdash; ~350 entries now live in
  `publications.js` as a structured object (`conference`, `journal`, `books`
  &rarr; `[{year, items}]`). The page is rendered at runtime by `main.js`. Adding
  a new paper now means editing one array entry, not HTML.
- **Split the stylesheet** into `base.css` (tokens, reset, typography,
  utilities) and `components.css` (layout + UI components).
- **Active-nav highlighting** now uses `<body data-page="...">` instead of
  path-matching &mdash; robust to query strings, trailing slashes, etc.
- **Removed** empty `homepage.html` leftover.

### Image quality

- **Team avatars** are now rendered as **140&times;140 circles** (was
  full-column-width, upscaling small source photos). Grid is 5 columns on
  desktop (was 4) for a denser, crisper layout.
- **Hero emblem** shrunk to **180&times;180** (was 260&times;260) with
  `object-fit: contain` to avoid upscaling the 300&times;300 source.
- **Project thumbnails** in *Our Work* now use a fixed 160-px tall band with
  `max-width: 70%` + `object-fit: contain` &mdash; the small source images
  (300&times;131 &amp; 300&times;167) sit centered on an alt background instead
  of being stretched to fill a 16:9 frame.

### Localisation

- Removed the Chinese-language hero subtitle under the lab name.
- Removed the Zhihu link (label was a Chinese personal name).
- Removed the Chinese ICP-beian (license) block from the footer.
- URL-encoded two remaining image filenames that contained Chinese characters.
- Site is now English-only throughout. Chinese-font fallbacks in the CSS font
  stack were removed.

### Changelog

- Split `CHANGELOG.md` into dated per-change files under `LOG/`, named
  `YYYY-MM-DD-NNN-slug.md` for natural time ordering. Each subsequent change
  adds one new file.

## Files touched

| File | Change |
|---|---|
| `assets/css/style.css` | deleted |
| `assets/css/base.css` | new |
| `assets/css/components.css` | new |
| `assets/js/partials.js` | new |
| `assets/js/publications.js` | new |
| `assets/js/main.js` | rewritten to render pubs + use `data-page` |
| `index.html` | Chinese removed, uses partials, smaller emblem |
| `team.html` | uses partials, circular/smaller avatars, English |
| `publications.html` | reduced to a template; data comes from JS |
| `teaching.html` | uses partials, Chinese link dropped |
| `work.html` | uses partials, thumb layout fixed |
| `homepage.html` | deleted |
| `LOG/CHANGELOG.md` | deleted (replaced by dated files) |
