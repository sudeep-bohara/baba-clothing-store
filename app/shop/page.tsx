import type { Metadata } from "next";
import Link from "next/link";
import { SearchX } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductGrid } from "@/components/product-card";
import { ShopToolbar } from "@/components/shop/shop-toolbar";
import { products } from "@/lib/products";
import { browseProducts, parseCategory, parseSort, shopHref } from "@/lib/shop";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Shop",
  description:
    "Browse the sample capsule — tailoring, denim, essentials and accessories. Demonstration catalogue with illustrative prices.",
  path: "/shop",
});

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[]; sort?: string | string[] }>;
}) {
  const params = await searchParams;
  const category = parseCategory(params.category);
  const sort = parseSort(params.sort);
  const visible = browseProducts(category, sort);

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
        <ShopToolbar category={category} sort={sort} count={visible.length} />

        <div className="pt-10">
          {visible.length > 0 ? (
            <ProductGrid products={visible} preloadCount={4} />
          ) : (
            <div className="flex flex-col items-start gap-5 border border-ink/10 bg-bone px-6 py-16 sm:items-center sm:text-center">
              <SearchX className="size-6 text-ink/60" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-display text-2xl">Nothing in this collection yet</p>
                <p className="mt-2 text-sm text-ink/65">
                  The sample catalogue has no pieces in this category.
                </p>
              </div>
              <Link
                href={shopHref(null, "featured")}
                scroll={false}
                className="inline-flex h-12 items-center justify-center border border-ink/25 px-6 text-label transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                Reset filters
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
