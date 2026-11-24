# Technical Architecture — Baba Clothing Concept

**Status:** describes the Stage 1 concept as built. Stage 2 requirements are marked as such.

## 1. Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, static export of every route) |
| Language | TypeScript, `strict` |
| Styling | Tailwind CSS v4 with design tokens in `app/globals.css` |
| Animation | `motion` (Framer Motion successor), reduced-motion aware |
| Icons | `lucide-react` |
| Fonts | Instrument Serif + Inter Tight via `next/font` (self-hosted at build) |
| Deployment | Vercel, preview-first (see [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)) |
| Package manager | npm with a committed lockfile |

No runtime database, API route, authentication service or third-party script is used.

## 2. Directory layout

```text
app/
  layout.tsx              root shell: fonts, bag provider, header, footer, SEO defaults
  page.tsx                home
  shop/page.tsx           catalogue with client-side filtering and sorting
  collections/page.tsx    collection index
  collections/[slug]/     one statically generated page per collection
  products/[slug]/        one statically generated page per product
  bag/page.tsx            full bag view
  about/page.tsx          brand concept and credits
  contact/page.tsx        verified channel plus explicit placeholders
  privacy/page.tsx        concept privacy disclosure
  terms/page.tsx          concept terms
  not-found.tsx           404
  sitemap.ts, robots.ts   generated SEO routes
  icon.svg, globals.css
components/
  site-header.tsx, site-footer.tsx, wordmark.tsx, icons.tsx
  bag-provider.tsx, bag-drawer.tsx, bag-view.tsx, add-to-bag.tsx, quantity-stepper.tsx
  product-card.tsx, product-gallery.tsx, policy-page.tsx
  home/hero.tsx, home/sections.tsx
  shop/shop-browser.tsx
  ui/button.tsx, ui/container.tsx, ui/reveal.tsx, ui/section-heading.tsx
lib/
  products.ts   typed catalogue, categories, related-product logic
  collections.ts collection view models joined from categories and media
  media.ts      campaign, editorial, social and collection imagery with alt/focal data
  site.ts       brand facts, navigation, contact placeholders
  seo.ts        site URL, indexing switch, Open Graph image
  format.ts     price formatting, cn.ts class merging, use-lock-body-scroll.ts
docs/           specification, brand, architecture, security, policy drafts, QA
public/         local images and the Open Graph card
```

The PRD's suggested `data/` and `styles/` folders are not created: a single `lib/` module set and
Tailwind tokens in `app/globals.css` cover the same separation with less indirection, as the PRD
allows.

## 3. Data flow

- `lib/products.ts` is the only source of product data. Pages, cards, the bag and the sitemap all
  read from it; there are no duplicated product literals in components.
- `lib/collections.ts` derives collections from `categories` plus the imagery in `lib/media.ts`,
  so a collection cannot drift from the catalogue.
- Every product and collection page is statically generated with `generateStaticParams`; there is
  no runtime data fetching, so no loading or error boundary is needed for data.
- The bag is client state. `BagProvider` reads `localStorage` after mount (keeping server and
  first client render identical), validates each stored line against the catalogue, and writes
  back on change. Nothing leaves the browser.

## 4. Rendering strategy

| Route | Rendering |
|---|---|
| `/`, `/shop`, `/about`, `/contact`, `/bag`, `/privacy`, `/terms`, `/collections` | static |
| `/collections/[slug]` (5) | static, one file per collection |
| `/products/[slug]` (8) | static, one file per product |
| `/sitemap.xml`, `/robots.txt` | generated at build |
| `/_not-found` | static |

Static output is what makes the concept trivially safe: there is no server surface to attack and
no data store to leak.

## 5. Component conventions

- Server components by default; `"use client"` only where interaction requires it (header, bag,
  shop browser, gallery, add-to-bag, quantity stepper, reveal animation).
- Props are typed inline next to the component; shared domain types live in `lib/`.
- Presentation components never import page-level data; they receive it.
- `Container` fixes page gutters; `text-display` / `text-label` utilities fix the type scale.

## 6. Images

- All photography is local JPEG, pre-sized, and served through `next/image` with explicit
  `sizes`, `fill` and an `object-position` focal point per frame.
- The first product frame uses `preload` (plus `loading="eager"`) so it is the LCP image;
  thumbnails request a lighter `quality` variant.
- `docs/ASSETS.md` records dimensions, source, creator and licence for every file.
- Replacing an image in place requires clearing the optimiser cache
  (`rm -rf .next/cache/images`).

## 7. SEO and metadata

- `metadataBase` from `NEXT_PUBLIC_SITE_URL`, canonical URL on every route.
- Open Graph and Twitter card data with a local 1200×630 card (`public/og.jpg`).
- `app/sitemap.ts` lists static routes, collections and products; `app/robots.ts` disallows
  crawling unless `NEXT_PUBLIC_ALLOW_INDEXING=true`.
- No structured data is published: sample prices and availability would be fabricated product
  data, which the PRD forbids.

## 8. Quality gates

`npm run lint`, `npm run typecheck` and `npm run build` must pass before any commit is proposed.
The full manual matrix is in [TESTING-AND-QA.md](TESTING-AND-QA.md).

## 9. Stage 2 extensions (design intent, not implemented)

- Product and collection data from a CMS or commerce backend behind the same view models.
- Server-side cart with a session, replacing `BagProvider`.
- Checkout through an established payment gateway; secrets server-side only; webhook validation
  and idempotency.
- Accounts only if the owner requires them, through a trusted auth provider.
- Analytics introduced with consent, disclosed in a reviewed privacy policy.
