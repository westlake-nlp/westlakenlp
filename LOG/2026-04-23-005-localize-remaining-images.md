# 2026-04-23 · Localize remaining remote images

Completed the image migration started in change 003 — all HTML files now
reference only local paths under `assets/images/`.

## Images downloaded

| File saved | Source URL |
|---|---|
| `assets/images/fast-detectgpt.png` | `uploads/2025/06/微信图片_20250630130436-300x131.png` |
| `assets/images/ai-researcher.png`  | `uploads/2025/07/微信图片_20250716141115-300x167.png` |

## Paths updated

| File | What changed |
|---|---|
| `work.html` | favicon + 2 project thumbnails → local |
| `publications.html` | favicon → local |
| `teaching.html` | favicon + 3 avatar images → local |

No remote `wp-content/uploads` URLs remain in any HTML file.
