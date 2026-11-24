# Privacy Disclosure — draft

**DRAFT — NOT APPROVED FOR PRODUCTION USE**

This document describes what the concept site does today and what a real privacy policy must
cover. It is not Baba Clothing's privacy policy, and publishing it does not create legal
compliance.

## 1. What the concept does

- Publishes a demonstration catalogue, collection pages and a synthetic shopping bag.
- Sells nothing: no orders, payments, accounts, contact submissions or newsletter sign-ups.
- Sets no cookies of its own and runs no analytics, advertising pixels or behavioural tracking.
- Makes no request to a third-party font, image or script host — fonts and photographs are
  served from the site itself.

The same disclosure is written for visitors on the `/privacy` page.

## 2. What is stored, and where

| Data | Where | Purpose | Retention |
|---|---|---|---|
| Bag lines: sample product reference, size, colour, quantity | Browser `localStorage`, key `baba-bag-v1` | Keep the demonstration bag across navigation | Until the visitor clears site data or uses Clear bag |

Bag data never leaves the device. There is no server-side store, no export and no sharing with
the brand owner or any processor.

## 3. Hosting data

The static files are delivered by a hosting provider, which will process ordinary technical
request data (IP address, user agent, timestamps, requested path) to serve and protect the
service. That processing belongs to the provider and must be described accurately in a
production policy.

## 4. Links away

Instagram (`@babaclothing.np`) is the only external destination and opens in a new tab.
Instagram's own terms and privacy policy then apply.

## 5. Production policy requirements

Before launch the owner must publish a reviewed privacy policy covering:

1. Business identity and contact details.
2. Categories of personal data collected.
3. Collection methods.
4. Purposes and legal bases.
5. Payment processing.
6. Shipping and delivery data.
7. Third-party processors and their locations.
8. Cookies and tracking, with consent management where required.
9. Retention periods.
10. Security safeguards.
11. Data subject rights and how to exercise them.
12. International transfers, if applicable.
13. Children's privacy.
14. Complaints and contact channels.
15. How the policy is updated and how changes are announced.

The requirements depend on the law that applies where Baba Clothing operates and where its
customers are. A qualified professional must confirm them; this document cannot.

## 6. Known gaps

- No verified business entity, address or data-protection contact exists yet (see
  [PROJECT-BRIEF.md](PROJECT-BRIEF.md) and the contact placeholders in `lib/site.ts`).
- No legal review has taken place.
- No decision has been made about whether Stage 2 will use analytics; if it does, consent and
  disclosure must be designed first.
