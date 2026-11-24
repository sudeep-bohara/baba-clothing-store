import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description:
    "How this Baba Clothing storefront concept may be used, and what real terms of sale would need to cover.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Terms"
      title="No sale takes place on this site."
      intro="Plain-language rules for viewing a design concept. These are not terms of sale and they are not Baba Clothing's commercial terms."
      footer="A production store needs terms of sale written with the brand owner and reviewed by a qualified professional for the law that applies where the business operates."
      sections={[
        {
          heading: "What this site is",
          body: [
            "An unofficial concept study for Baba Clothing, prepared to demonstrate a possible storefront design. It is not operated by, endorsed by or affiliated with the brand unless the owner says otherwise in writing.",
            "Nothing here is an offer to sell, and no contract of sale can be formed by using the site.",
          ],
        },
        {
          heading: "Product information and prices",
          body: [
            "Product names, descriptions, colours, sizes and prices are sample content created for the concept. Prices are shown in rupees for illustration only and reflect no real pricing, stock or promotion.",
            "The shopping bag and its totals are a demonstration of interaction design. The checkout action explains that ordering is not enabled, and no order is created.",
          ],
        },
        {
          heading: "Brand, logo and photography",
          body: [
            "The Baba Clothing name, the slogan Your style, Your identity. and any brand marks belong to their respective owner. This concept uses a text wordmark and does not recreate the brand's monogram.",
            "Demonstration photographs are CC0 or Public Domain Mark works, stored locally and credited by file in the repository's asset manifest. They do not depict Baba Clothing products, models or campaigns, and they must be replaced with owner-supplied photography before any public use.",
          ],
        },
        {
          heading: "Using the site",
          body: [
            "You are welcome to browse, resize, zoom and test the interactions on any device, including with a keyboard or screen reader.",
            "Please do not present this concept as the brand's live store, pass off its demonstration photography as the brand's own, or use it to take orders or payments from anyone.",
          ],
        },
        {
          heading: "Accuracy and availability",
          body: [
            "The concept is provided as it is, for review and discussion. It may change or disappear without notice, and no promise is made about its accuracy, availability or fitness for any purpose.",
            "Because no transaction can occur, there is no liability to limit in respect of orders, delivery, payment or returns — those relationships do not exist here.",
          ],
        },
        {
          heading: "What production would require",
          body: [
            "A real store's terms would need to define website use, product information, pricing, order acceptance, payment obligations, customer responsibilities, intellectual property, liability, applicable law, dispute resolution and contact details.",
            "Shipping, returns, refunds, cancellations and payment terms would each need their own approved policy, written from verified operational facts. Publishing a policy page does not by itself create legal compliance.",
          ],
        },
      ]}
    />
  );
}
