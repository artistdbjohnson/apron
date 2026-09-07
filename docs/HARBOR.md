# Harbor rule — APRON media

Do **not** commit generated jpg/png/mp4 to GitHub.
That is the failure mode from the Harbor app (binary git upload lock).

## Allowed on GitHub
- HTML, CSS, JS, TS, SVG, JSON, Markdown
- This file, `docs/media-map.json`, `vercel.json` rewrites

## How media reaches the live site
1. Generate with Grok Imagine.
2. Compress into `apps/web/dist/brand/` (local only).
3. Serve at `/brand/*` on Vercel:
   - preferred: `vercel___deploy_to_vercel` with `encoding=base64` and `framework=null`
   - fallback: `vercel.json` rewrites from `/brand/file` to a hosted object URL
4. HTML keeps `src="/brand/crew.jpg"` etc. Paths stay stable.

## Proven this session
`https://apron-rewrite-probe.vercel.app/brand/crew.jpg` → 200 JPEG
`https://apron-rewrite-probe.vercel.app/brand/hero.mp4` → playable 12s loop

Git tree must stay text + SVG.
