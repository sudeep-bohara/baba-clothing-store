<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-notes -->

## Project notes — Baba Clothing storefront concept

Unofficial design concept for `@babaclothing.np`. Demonstration content only: no real prices,
stock, payments, delivery, or contact details beyond the verified Instagram account.

Commands: `npm run dev` · `npm run build` · `npm run lint` · `npm run typecheck`.

Where content lives:
- `lib/products.ts` — the sample catalogue (names, prices, sizes, colourways, image refs).
- `lib/media.ts` — campaign, editorial and social-feed imagery plus each frame's `alt`/`focal`.
- `lib/site.ts` — brand name, slogan, nav, and the contact placeholders.
- `public/images/` — local CC0/PDM demo photography, credited in `docs/ASSETS.md`.

Rules that must survive edits:
- Never invent business facts. Prices/stock/shipping/address/hours stay labelled as placeholders.
- Do not recreate the BA monogram; the header uses a text wordmark until an approved asset exists.
- Use the slogan exactly: "Your style, Your identity."
- Keep every image licensed, local, and listed in `docs/ASSETS.md` with its real source.

Gotchas:
- Next 16 renamed the `Image` prop `priority` to `preload`; `priority` still compiles but Next's
  dev LCP check only recognises `preload`/`loading="eager"`.
- Overwriting an image file in place does not clear the optimiser cache — `rm -rf .next/cache/images`.
- `next dev` re-creates the block at the top of this file; append notes below it.
<!-- END:project-notes -->
