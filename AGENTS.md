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
- `lib/collections.ts` — collections, derived from the catalogue plus collection imagery.
- `lib/media.ts` — campaign, editorial, collection and social imagery plus each frame's `alt`/`focal`.
- `lib/site.ts` — brand name, slogan, nav, and the contact placeholders.
- `lib/seo.ts` — site origin, the indexing switch, the Open Graph card.
- `public/images/` — local CC0/PDM demo photography, credited in `docs/ASSETS.md`.

Routes: `/` · `/shop` · `/collections` · `/collections/[slug]` · `/products/[slug]` · `/bag` ·
`/about` · `/contact` · `/privacy` · `/terms`, plus `sitemap.ts`, `robots.ts` and `not-found.tsx`.

Documentation is not decorative here — `docs/PRD.md` is the authoritative spec and
`docs/TRACEABILITY.md` maps each requirement to its implementation and test. Read both before
adding a route or a feature.

Rules that must survive edits:
- Never invent business facts. Prices/stock/shipping/address/hours stay labelled as placeholders.
- Do not recreate the BA monogram; the header uses a text wordmark until an approved asset exists.
- Use the slogan exactly: "Your style, Your identity."
- Keep every image licensed, local, and listed in `docs/ASSETS.md` with its real source.

Gotchas:
- `ProductGrid` takes `preloadCount`; pass `1` on any page whose first card is above the fold or
  Next warns that the LCP image is missing `loading="eager"`.
- Privacy/terms pages use `components/policy-page.tsx`; keep section numbers at `text-ink/60` —
  `/50` fails 4.5:1 and axe catches it.
- Next 16 renamed the `Image` prop `priority` to `preload`; `priority` still compiles but Next's
  dev LCP check only recognises `preload`/`loading="eager"`.
- Overwriting an image file in place does not clear the optimiser cache — `rm -rf .next/cache/images`.
- `next dev` re-creates the block at the top of this file; append notes below it.
<!-- END:project-notes -->
