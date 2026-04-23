# 2026-04-22 · Initial release

First lightweight static rebuild of the WestlakeNLP homepage, replacing the
previous WordPress-based site. Content was scraped from https://westlakenlp.com/
and reorganised into clean, semantic HTML with an academic-style design.

## Added

- **`index.html`** &mdash; home page
  - Hero (lab name + emblem), About, Stats, Research Topics, News, Join Us
- **`team.html`** &mdash; Faculty / Postdocs / PhD Students / RAs / Alumni
- **`publications.html`** &mdash; 300+ entries across conference, journal, books;
  sticky year filter
- **`teaching.html`** &mdash; course card, updates, instructor + TAs, materials
- **`work.html`** &mdash; Fast-DetectGPT, AI-Researcher
- **`assets/css/style.css`** &mdash; monolithic stylesheet
- **`assets/js/main.js`** &mdash; nav toggle, filter, reveal-on-scroll, year

## Design

- Westlake deep-blue (`#003055`) accent on white
- System-font stack
- Responsive grid layouts (4 &rarr; 3 &rarr; 2 &rarr; 1 col)
- Sticky translucent header with blurred backdrop

## Known issues (to address next)

- Duplicated header/footer markup across five HTML files
- Publications data embedded directly in HTML (noisy diff surface)
- Team avatars rendered larger than source image, causing soft/blurry look
- Chinese fragments still present in a few places
