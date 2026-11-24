import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { ShopBrowser } from "@/components/shop/shop-browser";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Shop",
  description:
    "Browse the sample capsule — tailoring, denim, essentials and accessories. Demonstration catalogue with illustrative prices.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <Container className="pt-10 pb-8 sm:pt-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-label text-ink/60">Shop</p>
            <h1 className="mt-4 text-display text-[clamp(2.6rem,7vw,5rem)]">
              The capsule
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/65">
            {products.length} sample pieces across five collections. Everything here is
            demonstration content with illustrative pricing — not Baba Clothing&rsquo;s
            live catalogue.
          </p>
        </div>
      </Container>

      <Container>
        <h2 className="sr-only">All pieces</h2>
        <Suspense
          fallback={
            <div className="border-y border-ink/10 py-6 text-label text-ink/60">
              Loading the catalogue…
            </div>
          }
        >
          <ShopBrowser />
        </Suspense>
      </Container>
    </div>
  );
}
