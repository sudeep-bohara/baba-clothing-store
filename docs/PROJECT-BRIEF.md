# Project Brief — Baba Clothing

**Status:** context and constraints for the Stage 1 concept. The authoritative requirements live in
[PRD.md](PRD.md); this brief explains the situation behind them.

## 1. Purpose

Build a polished, interactive storefront concept for Baba Clothing (`@babaclothing.np`) so the
brand owner can review a credible online presence before any commercial build begins. It is a
portfolio-grade demonstration, not an approved production store.

## 2. What the owner has confirmed

- Brand name: BABA CLOTHING.
- Instagram: `@babaclothing.np` — the only verified contact channel.
- Slogan: "Your style, Your identity."
- Visual identity: black and white.
- Offer: mixed clothing collections, in general terms only.
- The brand's own posts show a "BA"-style monogram. It is the owner's asset; the concept does not
  recreate it.

## 3. What is explicitly out of bounds

Do not infer or publish any of the following: founding date or founder, company history,
manufacturing locations, fabric compositions, sustainability claims, certifications, awards,
partnerships, customer counts, ratings or reviews, stock levels, discounts, shipping and returns
terms, payment methods, prices presented as real, office or store address, opening hours, phone,
WhatsApp, email, service area, TikTok account, or target-market demographics.

If a page needs one of those values, it uses the placeholder pattern established in `lib/site.ts`
and states that the detail is pending confirmation.

## 4. Open items requiring owner confirmation

| # | Question | Blocks | Fallback in the concept |
|---|---|---|---|
| 1 | Official logo files (SVG/PNG) and monogram usage rules | Any use of real brand marks | Text wordmark plus typographic "B" favicon |
| 2 | Brand guideline documents, exact colour values, approved typefaces | Typography and palette finalization | Monochrome tokens in [DESIGN-SPEC.md](DESIGN-SPEC.md) §2 |
| 3 | Which categories are actually sold | Collection structure | Five sample groupings |
| 4 | Official catalogue: names, descriptions, sizes, colours, care | Product content | Eight sample pieces, labelled as sample |
| 5 | Real prices and currency handling | Price display | Illustrative NPR amounts, labelled |
| 6 | Target customer and geographic market | Copy, SEO, sizing | Neutral, market-agnostic copy |
| 7 | Physical store or customer-facing office, and its address | Contact page | "Studio address — to confirm" |
| 8 | Official contact details: email, phone, WhatsApp, hours, service area | Contact page, enquiries | "Not published" statuses |
| 9 | Which social accounts are official, including TikTok | Footer and social links | Instagram only |
| 10 | Shipping, returns, refunds, cancellation and payment terms | Checkout path, policy pages | Policies omitted; drafts explain the gap |
| 11 | Verified brand story | About page | Position statement plus explicit non-history |
| 12 | Domain, hosting ownership and operational responsibility | Deployment | Preview only, indexing disabled |
| 13 | Who approves privacy and commercial policies | Legal readiness | Drafts marked not approved |

## 5. Concept goals

1. Make the brand feel distinctive and credible in one screen.
2. Give products room: clear discovery, collection browsing, honest detail pages.
3. Demonstrate the shopping experience — options, quantity, bag, totals — without pretending to
   transact.
4. Mobile-first and accessible by construction, not by retrofit.
5. Make every piece of content and imagery replaceable in one place.

## 6. Demo boundaries

- Sample products are labelled as sample wherever a shopper could mistake them for stock.
- Prices are marked illustrative and are never described as official.
- No checkout, payment, order submission, account system or personal-data collection.
- The checkout action explains that ordering is not enabled.
- No fabricated shipping, returns, stock, discounts, reviews, hours or address.
- Imagery is licensed, stored locally and credited; no social-media reuse.
- Nothing claims owner approval or presents the site as the official store.

## 7. Stage 1 and Stage 2

| | Stage 1 — this delivery | Stage 2 — future, not started |
|---|---|---|
| Scope | Interactive concept with a sample catalogue | Production e-commerce |
| Transactions | None; demo bag only | Real checkout via a payment gateway |
| Data | None collected; bag in `localStorage` | Orders, accounts if required, shipping data |
| Catalogue | Eight sample pieces in `lib/products.ts` | Verified catalogue and inventory management |
| Policies | Drafts marked not approved | Legally reviewed, owner-approved |
| Hosting | Preview, indexing disabled | Verified domain, HTTPS, indexing enabled |
| Definition of done | [PRD.md](PRD.md) §22 | Requires a separate specification |

Anything in the right-hand column must not be represented as working today.

## 8. Technical direction

Next.js App Router, TypeScript, Tailwind CSS, Motion and Lucide icons, deployed as static output.
Details and the reasoning behind deviations from the PRD's suggested structure are in
[TECHNICAL-ARCHITECTURE.md](TECHNICAL-ARCHITECTURE.md).

## 9. Quality gates

See [TESTING-AND-QA.md](TESTING-AND-QA.md) for the matrix and [CONTRIBUTING.md](CONTRIBUTING.md) for
the workflow that enforces it: build, lint and typecheck green; no dead route or control; keyboard
and screen-reader usable; no horizontal overflow; console clean; no secrets.

## 10. Delivery

Work on `feat/storefront-concept`, commit coherent changes, open a pull request against `main` with
summary, screenshots, test results and known limitations. Nothing merges without review, and no
production deployment happens without written owner authorization.
