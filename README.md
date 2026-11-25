# Baba Clothing — Storefront Concept

A portfolio-first, interactive e-commerce website concept for Baba Clothing (@babaclothing.np).

This is a **design concept, not an authorized production store**. It is built to show the brand
owner how a premium, monochrome storefront could feel — not to sell anything.

## What's built

| Route | What it shows |
| --- | --- |
| `/` | Editorial homepage: campaign hero, collections, sample capsule, campaign split, lookbook, brand statement, social strip |
| `/shop` | Full sample catalogue with collection filters and sorting, kept in the URL |
| `/collections` | The five sample collections as an index |
| `/collections/[slug]` | One collection: its pieces, with breadcrumbs back to the catalogue |
| `/products/[slug]` | Product detail with gallery, size and colour selection, add-to-bag, and details accordions |
| `/bag` | Shopping bag with quantity editing, subtotal and a checkout button that explains it is demo-only |
| `/about` | Brand thinking, what the concept is and is not, image credits |
| `/contact` | The one verified channel (Instagram) and explicit placeholders for everything else |
| `/privacy` | What the concept stores (a local bag only) and what it never collects |
| `/terms` | Plain-language rules for viewing the concept, and what real terms must cover |

Interaction details worth reviewing: a slide-over bag that opens on add, a mobile menu, sticky
catalogue filters, and reduced-motion-aware reveal animations.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (routes prerender; /shop renders per filter state)
npm run lint
npm run typecheck
```

Requires Node 20+ (developed on Node 24).

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Lucide icons.

## Structure

```
app/                  routes: home, shop, collections/*, products/*, bag, about,
                      contact, privacy, terms, not-found, sitemap, robots
components/           header, footer, bag drawer, product card/gallery, add-to-bag, ui/*
components/home/      homepage sections
lib/products.ts       sample catalogue — names, prices, sizes, colourways, images
lib/collections.ts    collections derived from the catalogue and media
lib/media.ts          campaign, editorial, collection and social imagery
lib/site.ts           brand name, slogan, navigation, contact placeholders
lib/seo.ts            site origin, indexing switch, social card
public/images/        local, pre-sized demo photography
docs/                 PRD, brief, brand, design, architecture, security, policies, QA
```

Four modules control almost all content: `lib/site.ts` (brand facts, navigation, contact
placeholders), `lib/products.ts` (the catalogue), `lib/collections.ts` (collections, derived from
the catalogue) and `lib/media.ts` (imagery with alt text and focal points). Replacing demonstration
content with real content means editing those and nothing else.

## Content rules this concept follows

- **No invented business facts.** Prices, stock, shipping, returns, payment methods, address,
  hours and service areas are either absent or visibly marked as placeholders.
- **The BA monogram is not recreated.** The header uses a text wordmark until an approved logo
  file is supplied.
- **The slogan is used exactly as given** — "Your style, Your identity." — and not reworded.
- **Sample products are labelled as sample.** The shop, product pages and bag all say the
  catalogue is demonstration content with illustrative pricing.
- **Demo photography is licensed and declared.** Every image is CC0 or Public Domain Mark,
  stored locally, and credited in [docs/ASSETS.md](docs/ASSETS.md). Nothing implies the images
  show real inventory.
- **No payment or data collection.** The bag is local-only (`localStorage`); checkout explains
  that ordering is not enabled.

## Accessibility and responsive notes

- Single `<h1>` per page, labelled landmarks, and a skip link.
- Size and colour pickers are real radio groups inside fieldsets, so they work with a keyboard
  and a screen reader.
- The bag drawer traps focus, closes on Escape, and restores focus to the trigger.
- Add-to-bag confirmations and filter counts announce through `aria-live`.
- Verified at 320, 360, 390, 768, 1024, 1280, 1440 and 1920 px with no horizontal overflow, no
  console errors or warnings, no broken images and zero axe violations.
- All animation respects `prefers-reduced-motion`.

## Documentation

| Document | Covers |
| --- | --- |
| [PRD](docs/PRD.md) | Requirements, scope, IA and definition of done — the authoritative spec |
| [Traceability](docs/TRACEABILITY.md) | Each requirement mapped to its implementation and test |
| [Project brief](docs/PROJECT-BRIEF.md) | Context and constraints |
| [Brand direction](docs/BRAND-DIRECTION.md) | Identity and visual rules |
| [Design specification](docs/DESIGN-SPEC.md) | Interface by page |
| [Technical architecture](docs/TECHNICAL-ARCHITECTURE.md) | Stack, structure, data flow |
| [Security](docs/SECURITY.md) | Repository, application and Stage 2 rules |
| [Privacy draft](docs/PRIVACY-POLICY-DRAFT.md) | What is stored, and what a real policy needs |
| [Terms draft](docs/TERMS-AND-CONDITIONS-DRAFT.md) | Concept rules, and production terms |
| [Content and asset guide](docs/CONTENT-AND-ASSET-GUIDE.md) | Governance for copy and imagery |
| [Image credits and asset manifest](docs/ASSETS.md) | Every file, with dimensions, creator and licence |
| [Testing and QA](docs/TESTING-AND-QA.md) | The matrix and how to repeat it |
| [Deployment guide](docs/DEPLOYMENT-GUIDE.md) | Local, preview, rollback, launch gates |
| [Changelog](docs/CHANGELOG.md) | What changed |
| [Contributing](docs/CONTRIBUTING.md) | Branching, commits, review |

Policy drafts are marked as drafts wherever they appear (`docs/PRIVACY-POLICY-DRAFT.md`,
`docs/TERMS-AND-CONDITIONS-DRAFT.md`, and the `/privacy` and `/terms` pages). None of them is a
legally reviewed document, and publishing them does not make the site compliant.

## Project status

**Stage 1 — interactive concept: delivered.** Ten routes plus 404, a generated sitemap and robots
file, a working demonstration bag, and the Stage 1 documentation set.

**Stage 2 — production e-commerce: not started.** No checkout, payment gateway, inventory,
accounts, order handling or analytics exists, and none may be represented as working. The open
questions that gate Stage 2 are listed in
[docs/PROJECT-BRIEF.md](docs/PROJECT-BRIEF.md#4-open-items-requiring-owner-confirmation).

Nothing has been deployed and the branch has not been merged. Search indexing is disabled by
default so the concept cannot be mistaken for the brand's official site.

## Before any production use

1. Replace all demo photography with owner-supplied campaign and product images.
2. Supply the approved logo files and confirm the monogram usage rules.
3. Replace the sample catalogue with real products, prices and stock.
4. Confirm delivery, returns, payment and contact details, then replace the placeholders.
5. Have the privacy policy and terms reviewed and approved, and write the shipping, returns and
   payment policies from verified operating facts.
6. Get written approval from the brand owner for the concept itself, then follow
   [docs/DEPLOYMENT-GUIDE.md](docs/DEPLOYMENT-GUIDE.md) §5.
