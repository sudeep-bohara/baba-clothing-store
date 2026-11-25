# Changelog

Notable changes to the Baba Clothing storefront concept. The site is an unofficial
demonstration; no version has been released and nothing here is production software.

## Unreleased

### Fixed

- `/shop` shipped no products in its HTML: filtering ran in a client component behind
  `useSearchParams`, so the prerendered page contained only a loading line and the footer jumped
  0.33–0.46 CLS once hydration filled the grid. Filters and sort are now validated on the server
  and every filter state renders its own catalogue HTML, with the same URLs as before.
- The mobile filter row clipped three of six categories with no scroll affordance; the filters
  wrap on small screens and the bar sticks only from `md` up.
- The 404 page inherited the homepage title and canonical; it now declares its own title and
  stays out of the index.
- Hero and 404 call-to-action buttons were different widths on phones; they are full width below
  `sm` and inline from `sm` up.

### Changed

- Home collections section is titled "Where to start" rather than "Three ways in", which
  contradicted the five collections the site actually ships.

### Added

- Collection architecture: `/collections` index and five statically generated
  `/collections/[slug]` pages, derived from the catalogue so a collection cannot drift from the
  products it contains.
- Concept policy pages at `/privacy` and `/terms`, both carrying a draft status and describing
  what a production policy must cover.
- Generated `sitemap.xml` and `robots.txt`, with crawling disabled until the owner authorizes a
  production launch.
- Canonical URLs on every route, plus Open Graph and Twitter card metadata with a local
  1200×630 social image.
- Stage 1 documentation: PRD, requirements traceability, technical architecture, security, privacy
  and terms drafts, content and asset guide, testing and QA, deployment guide, contributing guide
  and this changelog.
- The project brief, brand direction and design specification were reconciled with the PRD: one
  navigation, one token table, the full page inventory and thirteen open items awaiting owner
  confirmation.
- `.env.example` documenting the two public build-time variables.

### Changed

- Product detail route moved from `/product/[slug]` to `/products/[slug]` to match the agreed
  information architecture.
- Primary navigation now includes Collections; Privacy and Terms live in the footer so the header
  stays uncluttered.
- Home collection tiles link to collection pages instead of filtered shop URLs.
- The outerwear and tailoring collection covers now use distinct photographs.

### Fixed

- Removed a duplicated collection image and corrected the `accessories` collection cover and alt
  text, which claimed a pair count the photograph did not show.
- Replaced stock portraits that did not read as fashion retail in the social strip with a
  product still life, a rail detail and the shop interior.
- Gallery thumbnails now request their own optimised variant, which also silences the incorrect
  "add loading=eager" console hint caused by two frames sharing one source URL.
- Product image files renamed to match the products they depict (`ivory-tailored-set`,
  `longline-blazer`).
- Scroll reveals force themselves visible in print, where intersection observers never fire.
- Contrast raised on secondary text throughout the site; axe now reports no violations.

### Removed

- Unused demonstration assets and the matching credit rows.

## 0.1.0 — initial concept

- Home, shop, product detail, bag, about, contact and 404 pages.
- Eight-piece sample catalogue across five collections with illustrative prices and explicit
  demonstration notices.
- Slide-over bag with focus trapping, keyboard support and local-only state.
- Text wordmark and typographic favicon; the brand's monogram is not recreated.
- Instagram as the only verified contact channel; all other details shown as placeholders.
- Local CC0 / Public Domain Mark photography with a per-file credit manifest.
