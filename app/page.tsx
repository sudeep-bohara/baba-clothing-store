import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/product-card";
import { Hero } from "@/components/home/hero";
import {
  CampaignSplit,
  Collections,
  LookbookGrid,
  SloganMarquee,
  SocialStrip,
  Statement,
} from "@/components/home/sections";
import { featuredProducts } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.slogan}`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SloganMarquee />
      <Collections />

      <section className="border-t border-ink/10 py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="New in"
            title="The sample capsule"
            action={{ label: "Shop all pieces", href: "/shop" }}
          />
          <div className="mt-10">
            <ProductGrid products={featuredProducts} preloadCount={2} />
          </div>
        </Container>
      </section>

      <CampaignSplit />
      <LookbookGrid />
      <Statement />
      <SocialStrip />
    </>
  );
}
