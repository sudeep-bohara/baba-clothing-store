# Testing and QA — Baba Clothing Concept

**Status:** the matrix actually run against this build, with the commands to repeat it.

## 1. Automated gates

```bash
npm run lint       # eslint, next/core-web-vitals rules
npm run typecheck  # tsc --noEmit, strict
npm run build      # static export of every route
```

All three must pass before a commit is proposed. The build fails on type errors, so a green build
plus a clean typecheck covers the compile-time contract.

## 2. Route coverage

| Route | Check |
|---|---|
| `/` | Renders hero, collections, capsule, campaign, lookbook, social, footer |
| `/shop` | Grid, category filters, sort, empty state, reset |
| `/collections` | Five collection cards, all linking to valid pages |
| `/collections/[slug]` | All five slugs render; unknown slug 404s |
| `/products/[slug]` | All eight slugs render with gallery, variants, related |
| `/bag` | Empty state, line items, quantity changes, subtotal maths |
| `/about` | Story, principles, credits |
| `/contact` | Verified channel, placeholder statuses |
| `/privacy`, `/terms` | Draft banner, sections, section list |
| `/sitemap.xml`, `/robots.txt` | Generated, correct absolute URLs |
| Unknown path | 404 page with route back into the site |

## 3. Functional checks

- Add to bag from a product page with a size and colour selected; the drawer opens and announces.
- Add without selecting a required size: an understandable message appears and nothing is added.
- Quantity stepper clamps at 1 and at the maximum; typing a value cannot produce zero or a
  negative.
- Remove a line, clear the bag, change a quantity: the subtotal recalculates and the header count
  follows.
- Bag survives navigation and a reload (localStorage), and an empty bag shows a calm empty state.
- Shop filters and sort operate on real data; a filter with no matches shows an empty state with a
  reset action.
- Header and footer links all resolve; no link points at a missing route.
- Mobile menu opens, traps focus, closes on Escape, returns focus to the trigger.
- Bag drawer traps focus, closes on Escape, returns focus to the Bag button.

## 4. Responsive matrix

Widths: 320, 360, 390, 768, 1024, 1280, 1440 and 1920 px.

For each width, check the home, shop, a collection, a product, the bag, about, contact, privacy
and terms pages for horizontal overflow (`document.documentElement.scrollWidth <= innerWidth`),
cropping, card alignment, sticky header behaviour and footer layout.

## 5. Accessibility

- Axe-core run at 390 px and 1440 px across home, shop, product, bag, about and contact: zero
  violations.
- One `h1` per page, ordered headings, labelled landmarks, skip link as the first focusable item.
- Colour contrast verified after the last opacity changes; secondary text no longer falls below
  4.5:1 on either ground.
- Keyboard-only pass: focus visible everywhere, no trap outside dialogs, dialogs restore focus.
- Reduced-motion: reveals, marquee and transitions collapse to static presentation.

## 6. Console and network

Load every route at 390 px and 1440 px with the network panel open: no errors and no warnings.
Requests are limited to the document, Next.js chunks, optimised images and the self-hosted fonts.

## 7. Images

- No broken images at any width (checked by reading `naturalWidth` on every `img` after a full
  scroll).
- First gallery frame is preloaded and eager; thumbnails request a lighter quality variant.

## 8. Release acceptance

A release candidate is acceptable only when: every P0 page exists; all routes resolve; no known
security issue is open; no major responsive defect remains; the primary interactions work;
`lint`, `typecheck` and `build` pass; documentation is current; and a pull request has been
reviewed.

## 9. Not covered

Real Safari and Firefox runs, real iOS and Android hardware, and any load or penetration testing.
Those belong to Stage 2 once a backend exists.

## 10. Reporting a defect

Include the route, viewport width, browser, the steps taken, the expected and actual result, and a
screenshot if the defect is visual. Note whether it affects a P0 interaction.
