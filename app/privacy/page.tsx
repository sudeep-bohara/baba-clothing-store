import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description:
    "What the Baba Clothing storefront concept stores, what it does not collect, and what a production privacy policy must cover.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title="This concept does not collect personal information."
      intro="A plain-language account of how this demonstration storefront handles data. It is written for the concept only and is not Baba Clothing's privacy policy."
      footer="Written for the concept stage. A production privacy policy must be prepared with the brand owner and reviewed by a qualified professional for the laws that apply to the business and its customers."
      sections={[
        {
          heading: "What this concept is",
          body: [
            "This site is an unofficial design study that shows how Baba Clothing could present its collections online. It is not the brand's store and it does not sell anything.",
            "Because nothing is sold, there is no order, payment, delivery or returns process, and no reason to ask you for a name, address or payment detail.",
          ],
        },
        {
          heading: "What it does not do",
          body: [
            "It does not have customer accounts or sign-in, contact forms or newsletter sign-ups, checkout or payment fields, advertising pixels, behavioural analytics, or third-party marketing trackers.",
            "It sets no cookies of its own. Nothing you do here is transmitted to a server that stores it, because there is no database behind the site.",
          ],
        },
        {
          heading: "What stays in your browser",
          body: [
            "The demonstration shopping bag is saved in this browser's local storage under the key baba-bag-v1. It holds only the sample product reference, the size and colour you picked, and the quantity.",
            "That data never leaves your device and is not shared with the brand owner or anyone else. Clearing site data for this domain, or using the Clear bag action, removes it.",
            "If local storage is unavailable — for example in some private browsing modes — the bag simply works in memory for the length of the visit.",
          ],
        },
        {
          heading: "Fonts, images and hosting",
          body: [
            "Typefaces are self-hosted: they are downloaded and served from this site when it is built, so no request reaches a font provider while you browse.",
            "All photography is stored with the site. Nothing is loaded from a stock-photo host, social network or image CDN.",
            "The site is served as static files. The hosting provider will process ordinary technical request data such as IP address, user agent and timestamps in order to deliver those files and protect the service. That processing is the provider's, not the brand's.",
          ],
        },
        {
          heading: "Links away from this site",
          body: [
            "The only external destination is the verified Instagram account, @babaclothing.np, and it opens in a new tab. Once you follow that link, Instagram's own privacy terms apply.",
          ],
        },
        {
          heading: "What production would require",
          body: [
            "A real store would need a reviewed privacy policy covering business identity and contact details, the categories of personal data collected, how it is collected, the purposes and legal bases, payment and delivery processing, third-party processors, cookies and consent, retention periods, security safeguards, customer rights, international transfers where relevant, children's privacy, complaint handling and how the policy is updated.",
            "It would also need a cookie notice that reflects what is actually running — never a consent banner for tracking that does not exist.",
          ],
        },
      ]}
    />
  );
}
