# Brand Direction — Baba Clothing

**Status:** creative direction for the concept. Not an official brand guideline. Every rule here
rests on what the owner has confirmed or on a stated assumption awaiting confirmation — see
[PROJECT-BRIEF.md](PROJECT-BRIEF.md) §4.

## 1. What is known

| Attribute | Status |
|---|---|
| Brand name | BABA CLOTHING — confirmed |
| Instagram | `@babaclothing.np` — confirmed, the only verified channel |
| Slogan | "Your style, Your identity." — confirmed and used verbatim |
| Colour identity | Black and white — confirmed |
| Monogram | A "BA"-style monogram appears in the brand's own posts — observed, not licensed to us |
| Offer | Mixed clothing collections — confirmed in general terms, not itemised |

Everything else — official logo files, exact colour values, typefaces, typography scale, tone of
voice guide, founding story, market, sizing conventions — is unconfirmed and must not be invented.

## 2. Creative direction

A premium, contemporary storefront with an editorial fashion sensibility: confident, product-led
and quiet, never a marketplace template. Photography carries the emotion; type carries the
authority; everything else stays out of the way.

### Visual principles

- Monochrome foundation: near-black, white and restrained neutrals. No accent colour.
- Strong typographic hierarchy, generous spacing, large intentional imagery.
- Consistent 4:5 product framing and a single rule-based card anatomy.
- Restrained motion that never delays reading.
- Small-screen design treated as the primary case.

### Avoid

- Blue, gradients, glass effects or decorative UI chrome.
- Fake urgency, fake discounts, fake reviews, testimonials or unsupported claims.
- Generic stock-photo overload; mixed image treatments.
- **Recreating the BA monogram.** The concept uses a typographic "B" mark and a text wordmark.
  The official monogram is never traced, redrawn or approximated. See
  [CONTENT-AND-ASSET-GUIDE.md](CONTENT-AND-ASSET-GUIDE.md) §1.

## 3. Identity in the interface

| Element | Implementation |
|---|---|
| Wordmark | Text: BABA in the display serif, CLOTHING letterspaced beneath, centred in the header |
| Monogram / favicon | A typographic "B" in `app/icon.svg` — a placeholder, not a brand mark |
| Slogan | "Your style, Your identity." set in the display serif, used in the footer, the home statement and page metadata |
| Voice | Short declarative sentences, no exclamation marks, no superlatives |
| Imagery | Monochrome, editorial, cropped tight, credited in [ASSETS.md](ASSETS.md) |

Type, colour, spacing and motion tokens are specified once in
[DESIGN-SPEC.md](DESIGN-SPEC.md) §2 and must not be restated or overridden elsewhere.

## 4. Copy direction

- The slogan appears exactly as supplied, with the supplied capitalisation and comma.
- Product copy describes cut, cloth and construction in concrete terms; it never claims fabric
  composition, origin or performance that the owner has not supplied.
- Interface copy names the action: "Add to bag", "Continue shopping", "Clear bag".
- Demo boundaries are stated plainly rather than hidden: "Illustrative demo pricing. No payment,
  delivery or order processing."
- Placeholders read as placeholders ("Not published", "To confirm"), never as plausible invented
  values.

## 5. Asset handling

Prefer owner-supplied photography. Until it arrives, use licensed demonstration imagery (CC0 or
Public Domain Mark), stored locally, credited per file, and clearly described as not depicting
real inventory. Replacement must be a one-line path change in `lib/media.ts` or `lib/products.ts`.
Full rules: [CONTENT-AND-ASSET-GUIDE.md](CONTENT-AND-ASSET-GUIDE.md).
