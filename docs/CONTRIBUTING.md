# Contributing — Baba Clothing Concept

## 1. Branching

- `main` is protected and stable. Do not push experimental work to it.
- Feature work uses a dedicated branch, for example `feat/storefront-concept` or `fix/bag-count`.
- Pull requests target `main` and are merged only after review.

## 2. Commits

Use the imperative mood and a scoped prefix:

```text
feat: build responsive homepage
feat: add collection pages
fix: resolve mobile navigation overflow
docs: add technical architecture
chore: remove unused image assets
```

One logical change per commit. Describe what changed and why in the body when the subject is not
enough. Include `Co-authored-by:` trailers when a commit is prepared with an agent.

## 3. Pull requests

Every pull request states:

1. Summary of the change.
2. Why it is needed.
3. Files and components affected.
4. Screenshots for any visual change, at a mobile and a desktop width.
5. Testing performed — which commands, which routes, which widths.
6. Known limitations.
7. Security considerations, where relevant.

## 4. Before opening a pull request

```bash
npm run lint
npm run typecheck
npm run build
```

All three must pass. Then walk the acceptance checks in
[TESTING-AND-QA.md](TESTING-AND-QA.md).

## 5. Code standards

- TypeScript strict; no `any` without a comment that justifies it.
- Server components by default; `"use client"` only where interaction requires it.
- Product, brand and media content belongs in `lib/products.ts`, `lib/site.ts`,
  `lib/collections.ts` or `lib/media.ts` — never inline in a page.
- Semantic HTML and labelled landmarks; every image gets meaningful `alt` text.
- Design tokens only: no raw hex values in components, no arbitrary spacing that bypasses the
  scale.
- Respect `prefers-reduced-motion` in anything that animates.
- Comments explain *why* something is unusual, not what the next line does.

## 6. Content rules for contributors

Never invent a business fact, a product, a price, a policy or a contact detail. If a value is
unknown, use the placeholder pattern already in `lib/site.ts` and raise it as a question for the
brand owner. Do not add marketing claims, reviews, ratings or urgency devices.

Do not recreate the BA monogram. An approved logo file from the owner is required first.

## 7. Assets

Demonstration photography must be licensed (CC0 or Public Domain Mark), stored locally in
`public/images/`, pre-sized, and recorded in [docs/ASSETS.md](ASSETS.md) with source,
creator and licence. After replacing a file, clear the optimiser cache:
`rm -rf .next/cache/images`.

## 8. Secrets

Never commit `.env` files or credentials. `.env.example` documents the build-time variables with
empty values. Anything prefixed `NEXT_PUBLIC_` is public.

## 9. Review checklist

- Does it satisfy the PRD requirement it claims to?
- Are there invented facts, or content that implies the concept is the live store?
- Does it hold at 320, 390, 768, 1024 and 1440 px?
- Keyboard and screen-reader behaviour intact?
- Console clean, images loading, no layout shift?
- Documentation updated when behaviour or structure changed?
