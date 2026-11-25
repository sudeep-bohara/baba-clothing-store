# Content and Asset Guide — Baba Clothing Concept

**Status:** rules for Stage 1 demonstration content. Production requires owner-supplied assets.

## 1. Content rules

1. **No invented business facts.** Prices, stock, shipping, delivery, returns, payment methods,
   address, phone, email, opening hours and service areas are either absent or visibly labelled
   as placeholders.
2. **Demonstration content is labelled where it appears** — on the shop, every product page, the
   bag, the home page and the footer.
3. **The slogan is used exactly** as supplied: "Your style, Your identity."
4. **The BA monogram is not recreated.** The header uses a text wordmark; the favicon is a
   typographic "B". An approved logo file is required before any other mark is used.
5. **Only verified channels are linked.** Instagram `@babaclothing.np` is the single confirmed
   account. TikTok exists per the brief but its URL is unverified, so no link is shown until the
   owner confirms it.
6. **No urgency or social proof.** No countdowns, "only 2 left", reviews, ratings, bestseller
   badges or customer quotes — none of it could be true yet.

## 2. Where content lives

| Content | File |
|---|---|
| Brand facts, slogan, navigation, contact placeholders | `lib/site.ts` |
| Products, categories, sizes, colourways, details | `lib/products.ts` |
| Collections (derived) | `lib/collections.ts` |
| Campaign, editorial, social and collection images | `lib/media.ts` |
| Page copy | the page or section component that renders it |
| Image credits | `docs/ASSETS.md` |

Editing those four modules changes the whole site. Nothing else hardcodes product or brand data.

## 3. The sample catalogue

Eight sample pieces across five collections. Each entry carries a slug, name, category,
illustrative price in rupees, a summary, detail bullets, one or two images with alt text and a
focal point, optional sizes and colourways, and `isNew` / `featured` flags used by the home page.

Sample data must not be described anywhere as Baba Clothing's real range, real prices or real
availability.

## 4. Imagery rules

- Local files only — no hotlinking to stock libraries, social platforms or image CDNs.
- Pre-sized JPEGs; the optimiser handles delivery, not resizing at request time from originals.
- Monochrome treatment is applied at render (`filter` on the `photo` class), so mixed sources
  read as one campaign. Do not bake the effect into files unless you also update credits.
- Every frame needs descriptive `alt` text and a `focal` point so crops behave on every
  breakpoint.
- Replacing a file in place requires clearing the optimiser cache:
  `rm -rf .next/cache/images`.

## 5. Licensing and the asset register

Every file is recorded in [ASSETS.md](ASSETS.md) with its path, dimensions, title, creator,
licence (CC0 1.0 or Public Domain Mark) and source URL. The register is generated from the
download manifest and pruned to files that still exist.

A production asset register must also track usage permission, approval status and intended
usage. Do not use an asset whose licensing is unclear.

## 6. Asset handover checklist (owner)

Before production, the owner should supply:

- Official logo (SVG or high-resolution PNG) and any brand guidelines.
- Approved colour values and typography.
- Product photography, one set per product and colourway.
- Campaign photography for the home and about pages.
- Product names, descriptions, fabric, sizing, fit and care instructions.
- Real prices, currency and availability.
- Verified social links, including TikTok if it is official.
- Official contact details and, if it exists, the store address and hours.
- An approved brand story, including whether founding history may be published.

Until each item arrives, the site keeps the corresponding placeholder rather than a guess.

## 7. Copy tone

Confident, quiet, specific. Short declarative sentences. No exclamation marks, no superlatives,
no marketing urgency. Interface copy names the action ("Add to bag", "Continue shopping") and
disclosures state the limitation plainly ("Illustrative demo pricing. No payment, delivery or
order processing"). See [BRAND-DIRECTION.md](BRAND-DIRECTION.md).
