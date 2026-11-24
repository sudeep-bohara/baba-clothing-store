# Baba Clothing — Storefront Concept

A portfolio-first, interactive e-commerce website concept for Baba Clothing (@babaclothing.np).

This is a **design concept, not an authorized production store**. It is built to show the brand
owner how a premium, monochrome storefront could feel — not to sell anything.

## What's built

| Route | What it shows |
| --- | --- |
| `/` | Editorial homepage: campaign hero, collections, sample capsule, campaign split, lookbook, brand statement, social strip |
| `/shop` | Full sample catalogue with collection filters and sorting, kept in the URL |
| `/product/[slug]` | Product detail with gallery, size and colour selection, add-to-bag, and details accordions |
| `/bag` | Shopping bag with quantity editing, subtotal and a checkout button that explains it is demo-only |
| `/about` | Brand thinking, what the concept is and is not, image credits |
| `/contact` | The one verified channel (Instagram) and explicit placeholders for everything else |

Interaction details worth reviewing: a slide-over bag that opens on add, a mobile menu, sticky
catalogue filters, and reduced-motion-aware reveal animations.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all routes prerender)
npm run lint
npm run typecheck
```

Requires Node 20+ (developed on Node 24).

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Lucide icons.

## Structure

```
app/                  routes (home, shop, product/[slug], bag, about, contact, not-found)
components/           header, footer, bag drawer, product card/gallery, add-to-bag, ui/*
components/home/      homepage sections
lib/products.ts       sample catalogue — names, prices, sizes, colourways, images
lib/media.ts          campaign and editorial imagery
lib/site.ts           brand name, slogan, navigation, contact placeholders
public/images/        local, pre-sized demo photography
docs/                 brief, brand direction, design spec, asset credits
```

Two files control almost all content: `lib/products.ts` and `lib/site.ts`. Replacing demo
content with real content means editing those, plus the image paths in `lib/media.ts`.

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
- Verified at 320, 390, 768, 1024 and 1440 px with no horizontal overflow and no console errors.
- All animation respects `prefers-reduced-motion`.

## Documentation

- [Project brief](docs/PROJECT-BRIEF.md)
- [Brand direction](docs/BRAND-DIRECTION.md)
- [Design specification](docs/DESIGN-SPEC.md)
- [Image credits and asset manifest](docs/ASSETS.md)

## Before any production use

1. Replace all demo photography with owner-supplied campaign and product images.
2. Supply the approved logo files and confirm the monogram usage rules.
3. Replace the sample catalogue with real products, prices and stock.
4. Confirm delivery, returns, payment and contact details, then replace the placeholders.
5. Get written approval from the brand owner for the concept itself.
