# Requirements Traceability — Baba Clothing Concept

**Status:** maps each major Stage 1 requirement in [PRD.md](PRD.md) to where it is implemented and
how it is verified. "Test" refers to the method and, where automated, the check that proves it.

Verification methods used throughout:

- **B** — `npm run build` (static generation of every route)
- **L** — `npm run lint` · **T** — `npm run typecheck`
- **A** — axe-core run at 390 px and 1440 px, zero violations
- **R** — responsive sweep at 320/360/390/768/1024/1280/1440/1920 px, no overflow
- **C** — console and network review: no errors or warnings
- **I** — image audit: every `img` has `naturalWidth > 0` after a full scroll
- **K** — keyboard-only walkthrough with focus-trap checks
- **M** — manual inspection against the acceptance criteria

## 1. Functional requirements

| ID | Requirement (PRD) | Implementation | Test |
|---|---|---|---|
| FR-4.1 | Homepage sections, hero, CTA, featured collections and products, brand statement, social, footer | `app/page.tsx`, `components/home/hero.tsx`, `components/home/sections.tsx` | B, L, R, A, M |
| FR-4.1a | No fake discounts, stock claims or promotions | No promotional components exist; `isNew` is a design label only, no counts or urgency | M |
| FR-4.2 | Product grid, categories, cards with name, price, image, link | `app/shop/page.tsx`, `components/shop/shop-browser.tsx`, `components/product-card.tsx` | B, M |
| FR-4.2a | Working filters and sorting, not decorative | `ShopBrowser` filters by category and sorts by price/newness over `lib/products.ts`; state in URL | M, K |
| FR-4.2b | Empty results state | Reset action path in `shop-browser.tsx` | M |
| FR-4.2c | Structured catalogue, no duplicated product literals | Single source `lib/products.ts`; collections derived in `lib/collections.ts` | L, M |
| FR-4.2d | Collection index and collection pages | `app/collections/page.tsx`, `app/collections/[slug]/page.tsx` (5 static paths) | B, R, A |
| FR-4.3 | Gallery, title, demo price, description, sizes, colours, quantity, add-to-bag, related, demo notice | `app/products/[slug]/page.tsx`, `components/product-gallery.tsx`, `components/add-to-bag.tsx`, `components/quantity-stepper.tsx` | B, M, K |
| FR-4.3a | Variant selected before adding; quantity never ≤ 0 | First available size and colour preselected and changeable; `clampQty` bounds in `bag-provider.tsx` | M, K |
| FR-4.3b | Images have fallbacks | Local assets only; every frame has alt text and a focal point; no remote fetch can fail | I |
| FR-4.4 | Add, remove, change quantity, show variants, subtotal, empty state, persistence | `components/bag-provider.tsx`, `bag-drawer.tsx`, `bag-view.tsx`, `app/bag/page.tsx` | M, K |
| FR-4.4a | No transmission, no personal data, no orders, no payment implication | Bag is `localStorage` only; no network calls in the bag path; checkout states ordering is disabled | L, C, M |
| FR-4.5 | About page from confirmed information, no invented history | `app/about/page.tsx`; position statement plus explicit "what this is not" | M |
| FR-4.6 | Contact page: verified channel, placeholders for the rest, no fake form | `app/contact/page.tsx`, placeholders in `lib/site.ts` | M |
| FR-4.7 | Navigation, logo, bag indicator, footer, breadcrumbs, accessible controls, valid destinations | `components/site-header.tsx`, `site-footer.tsx`, breadcrumbs on product and collection pages | K, link check (all internal hrefs return 200) |
| FR-5.1 | Site structure: `/`, `/shop`, `/collections/[slug]`, `/products/[slug]`, `/bag`, `/about`, `/contact`, `/privacy`, `/terms` | `app/**/page.tsx`; `/collections` index added alongside the PRD's per-slug route | B |
| FR-5.2 | Primary nav Home/Shop/Collections/About/Contact; secondary bag, Instagram, privacy, terms; not overcrowded | `lib/site.ts` — `${primaryNav}`, `footerNav`, `footerSecondaryNav`; home via the wordmark | M, R |
| FR-6.1 | Editorial, art-directed direction | Type pairing, monochrome photography, rule-based cards, restrained motion | M |
| FR-6.2 | Design tokens for colour | `@theme` block in `app/globals.css`; mapping and deviations in [DESIGN-SPEC.md](DESIGN-SPEC.md) §2 | L, M |
| FR-6.3 | Controlled typography, licensed fonts | Instrument Serif + Inter Tight via `next/font` (both open-licensed, self-hosted) | B, M |
| FR-6.4 | Consistent spacing and layout | `Container`, section rhythm, card anatomy | R, M |
| FR-6.5 | Licensed imagery, alt text, loading behaviour, source record | `lib/media.ts`, `lib/products.ts`, `docs/ASSETS.md` (23 files with creator and licence) | I, M |
| FR-6.6 | Intentional motion and reduced-motion support | `components/ui/reveal.tsx`, `useReducedMotion`, marquee guard, print override | M, K |
| FR-6.7 | Breakpoint coverage without horizontal scrolling | Sweep at eight widths | R |
| FR-7 | Stack and code-quality rules | Next 16 App Router, TS strict, Tailwind 4, Motion, Lucide; typed models; no `any` | L, T, B |
| FR-9.2 | Stage 1 collects no personal information | No forms, no analytics, no cookies; only the bag key in `localStorage` | L, M |
| FR-10 | No invented legal policies; drafts marked | `/privacy`, `/terms` carry a draft marker; `docs/*-DRAFT.md` carry a status line | M |
| FR-11 | WCAG 2.2 AA target | Semantic landmarks, single `h1`, skip link, radio groups, focus management, contrast | A, K |
| FR-12.1 | Performance: LCP, CLS, image and font delivery | Preloaded LCP frame, explicit `sizes`, lighter thumbnails, self-hosted fonts, catalogue HTML rendered on the server for every filter state | B, C, I |
| FR-12.2 | SEO: titles, descriptions, canonicals, OG, sitemap, robots, no fake structured data | `app/layout.tsx`, per-route metadata, `app/sitemap.ts`, `app/robots.ts`, `public/og.jpg`; deliberately no JSON-LD | B, M |
| FR-13 | Testing and release acceptance | Matrix in [TESTING-AND-QA.md](TESTING-AND-QA.md) | B, L, T, A, R, C, I, K |
| FR-17 | Git governance: branches, commit style, PR content, secrets | [CONTRIBUTING.md](CONTRIBUTING.md); `.env.example` with empty values | M |
| FR-18 | Preview-first deployment, no production without authorization | [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md); indexing disabled by default | M |
| FR-22 | Definition of done | Every item listed in §3 below | — |

## 2. Non-functional and governance requirements

| Requirement | Where satisfied | Test |
|---|---|---|
| No secrets or personal data in the repository | `.gitignore`, `.env.example`, no server code | M |
| Dependency lockfile and minimal dependencies | `package-lock.json`; five runtime packages | `npm audit` reports zero vulnerabilities |
| No third-party scripts, trackers or CDNs | Self-hosted fonts and images; no analytics | C (network panel) |
| Accessibility tested, not assumed | axe on every route at two widths | A |
| Documentation set complete for Stage 1 | [PRD.md](PRD.md) §16 table; all rows present | Link check across `docs/` |
| Unknown business facts documented as owner decisions | [PROJECT-BRIEF.md](PROJECT-BRIEF.md) §4 (13 items) | M |
| Stage 1 / Stage 2 distinction explicit | [PRD.md](PRD.md) §3, [PROJECT-BRIEF.md](PROJECT-BRIEF.md) §7, [TECHNICAL-ARCHITECTURE.md](TECHNICAL-ARCHITECTURE.md) §9, [README](../README.md) status | M |

## 3. Definition of done — status

| PRD §22 item | Status |
|---|---|
| 1. Represents the brand professionally | Done |
| 2. All P0 pages implemented | Done — 10 routes plus 404, sitemap and robots |
| 3. Core shopping interactions work as demonstrations | Done |
| 4. Mobile and desktop polished | Done — eight-width sweep |
| 5. No invented claims presented as facts | Done — audited copy; placeholders explicit |
| 6. Assets have appropriate usage rights | Done — CC0/PDM, credited per file |
| 7. No customer information or payments collected | Done |
| 8. Accessibility and performance reviewed | Done — axe clean, LCP preloaded |
| 9. Automated checks and production build pass | Done |
| 10. Stage 1 documentation available | Done |
| 11. Reviewable pull request opened | Open — `feat/storefront-concept` |
| 12. Owner can inspect a preview | Pending — requires a deployment decision by the owner |

## 4. Deliberate deviations from the PRD

| PRD statement | Implementation | Reason |
|---|---|---|
| Suggested `data/` and `styles/` folders | `lib/` modules plus `@theme` tokens in `app/globals.css` | Same separation with fewer indirections; the PRD permits documented adjustments |
| `/collections/[slug]` only | Added `/collections` index | Primary navigation needs a destination for "Collections" |
| Mid gray `#777777` for secondary text | `text-ink/60`–`text-ink/70` | `#777777` fails 4.5:1 at body sizes on white; measured with axe |
| Structured data permitted where accurate | None published | Sample prices and availability would be fabricated product data |
| Sitemap implies indexable site | Sitemap generated, crawling disallowed by default | The concept is unofficial; indexing is a launch-time switch |

## 5. Known gaps

- No real Safari, Firefox, iOS or Android run; Chromium-based checks only (see
  [TESTING-AND-QA.md](TESTING-AND-QA.md) §9).
- No preview deployment exists yet, so PRD §22 item 12 stays open.
- Every policy document is a draft awaiting owner and legal review.
- No automated regression suite: the verification above is a repeatable scripted audit, not CI.
  Adding CI is recommended before Stage 2 work begins.
