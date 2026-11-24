# Design Specification — Baba Clothing Concept

**Status:** interface specification for the Stage 1 concept, as implemented. Requirement IDs
(FR-*) map to [PRD.md](PRD.md) and are tracked in [TRACEABILITY.md](TRACEABILITY.md).

## 1. Experience architecture

Primary navigation: **Shop, Collections, About, Contact**, with the wordmark as the route home and
a shopping-bag indicator with a live count. Secondary links — shopping bag, Instagram, image
credits, privacy, terms — live in the footer so the header stays uncluttered (PRD §5.2).

Mobile navigation is a full-height panel with a close control, focus trapping and Escape handling.
The bag is a slide-over drawer reachable from the header, from the bag page and after an add.

### Home (FR-4.1)

1. Concept banner above the header — sample catalogue, illustrative prices, no checkout.
2. Header with text wordmark and navigation.
3. Campaign hero: editorial image, headline, supporting line, Shop CTA.
4. Slogan marquee (decorative, hidden from assistive technology).
5. Collection tiles linking to `/collections/[slug]`.
6. Capsule grid of featured sample products.
7. Campaign split panel on ink with a lookbook image.
8. Brand statement carrying "Your style, Your identity." exactly.
9. Social strip: three shop-floor frames linking to the verified Instagram account.
10. Footer with navigation, verified channel, credits and concept disclaimers.

### Shop (FR-4.2)

- Responsive product grid, four across on desktop, two on phone.
- Category filters and sorting that operate on real catalogue data; state is kept in the URL so a
  filtered view can be shared and survives reload.
- Active filter count announced through `aria-live`; sticky filter bar on desktop.
- Empty state with a reset action when filters match nothing.

### Collections (FR-4.2)

- `/collections`: five collection cards — cover image, name, one-line description, sample count.
- `/collections/[slug]`: breadcrumb, collection name, description, piece count, the product grid,
  and links to the other collections. Statically generated for all five slugs.

### Product detail (FR-4.3)

- Responsive gallery with thumbnail strip; first frame preloaded, thumbnails lighter.
- Product name, category, illustrative demo price badge, summary, detail accordions.
- Size and colour as real radio groups inside fieldsets; quantity stepper with bounds.
- Add to bag requires a size where the sample product has sizes, with inline feedback when it is
  missing.
- Related products; explicit note that the piece is demonstration content.

### Shopping bag (FR-4.4)

- Slide-over drawer plus a full page at `/bag`.
- Local-only state (`localStorage`), validated against the catalogue on read.
- Change quantity, remove a line, clear the bag, illustrative subtotal.
- Checkout states that ordering is not enabled; no personal data is requested.
- Calm empty state with a route back into the catalogue.

### About (FR-4.5)

- Brand position, what the concept is and is not, design principles, image credits.
- No founding date, founder, history, manufacturing claim, certification, award or partnership.

### Contact (FR-4.6)

- The one verified channel: Instagram `@babaclothing.np`, opening in a new tab.
- Every unverified detail — address, email, phone/WhatsApp, hours, service area — shown as an
  explicit status ("To confirm" / "Not published") rather than a value.

### Privacy and terms (FR-4.6, PRD §9–10)

- Both pages open with a "Draft · not approved for production use" marker.
- Section list plus numbered sections; the prose explains what the concept does today and what a
  production document must cover.

### 404

- Calm, one sentence, routes back to the shop and the collections index.

## 2. Design tokens as implemented

Tokens are declared once in `app/globals.css` under `@theme`; components use token utilities
(`bg-ink`, `text-ink/65`, `border-ink/10`, `text-display`, `text-label`) and never raw hex values.

| Token | Value | Role | PRD §6.2 reference |
|---|---|---|---|
| `ink` | `#0A0A0A` | Primary dark, body text, dark surfaces | Ink |
| `paper` | `#FFFFFF` | Page ground | White |
| `charcoal` | `#171717` | Raised dark surfaces inside ink panels | Charcoal (`#1A1A1A`) |
| `bone` | `#F4F2EE` | Image placeholder ground, warm neutral | Soft gray (`#F3F3F1`) |
| `muted` | `#A3A3A3` | Non-text decoration on dark surfaces | Mid gray |
| `line` | `#2A2A2A` | Dividers on dark surfaces | Border |

**Documented deviations.** Secondary *text* uses alpha steps of `ink` (`text-ink/60` ≈ `#6C6C6C`,
`text-ink/70`) rather than the PRD's mid gray `#777777`, because `#777777` fails 4.5:1 for small
text on white at the body sizes used here. Borders on light surfaces use `border-ink/10`
(≈ `#E8E8E8`), which resolves close to the PRD's `#E5E5E5` while adapting to the ground beneath.
Charcoal and soft gray differ from the PRD sample values by one or two steps in each channel and
stay within the monochrome intent. Each deviation was verified with axe rather than assumed — see
[TESTING-AND-QA.md](TESTING-AND-QA.md) §5.

**Typography.** Instrument Serif (display, 400, roman and italic) paired with Inter Tight (body and
interface), both self-hosted at build through `next/font`. The display face is reserved for
headlines and editorial statements; the sans carries all interface text, with letterspaced small
caps for labels.

**Spacing and layout.** `Container` fixes page gutters (24 px on phone, 40–64 px above), section
rhythm uses 4/5/6 rem vertical steps, cards keep a 4:5 image ratio and a 1 px rule with fixed
padding. No ad-hoc margins.

## 3. Motion

- Reveals: 16 px rise plus fade, 500 ms, `ease-editorial`, staggered by 60 ms per item.
- Image hover: 700 ms scale to 1.035 inside an overflow-clipped frame.
- Bag drawer and mobile menu: short slide with a backdrop fade, focus trapped.
- `prefers-reduced-motion` collapses reveals, marquee and transitions to static presentation, and a
  print-media override forces revealed content visible so nothing disappears in a PDF.

## 4. Responsive and accessibility requirements

- Verified at 320, 360, 390, 768, 1024, 1280, 1440 and 1920 px with no horizontal overflow.
- Mobile-first; the phone layout is designed, not merely tolerated.
- One `h1` per page, ordered headings, labelled landmarks, skip link as the first focusable item.
- Keyboard-operable menus, dialogs, radio groups and steppers; visible focus; focus restored on
  close.
- Colour contrast verified with axe at 390 px and 1440 px; zero violations.
- Touch targets at least 44 px on interactive controls.

## 5. Performance and SEO requirements

- Every product frame carries `sizes`, `fill` and a focal point; the LCP frame is preloaded and
  eager, thumbnails request a lighter quality variant.
- Fonts are self-hosted with `display: swap`; no third-party script, tracker or CDN request.
- Every route is static; there is no runtime data fetch.
- Unique title and description per route, canonical URL, Open Graph and Twitter card, generated
  sitemap and robots. Indexing stays off until the owner authorizes launch.
- No structured data: sample prices and availability would be fabricated product data.

## 6. Acceptance criteria

- All routes render; no dead link or control.
- Filters, sorting, options, quantity, add/remove/update all work.
- The demo-only boundary is obvious on every page that could imply a transaction.
- No fabricated business fact, policy or contact detail anywhere in the interface.
- Build, lint, typecheck, axe and the responsive sweep pass — see
  [TESTING-AND-QA.md](TESTING-AND-QA.md).
