import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGallery } from "@/components/product-gallery";
import { AddToBag } from "@/components/add-to-bag";
import { ProductGrid } from "@/components/product-card";
import {
  getCategory,
  getProduct,
  products,
  relatedProducts,
} from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece not found" };
  return pageMetadata({
    title: product.name,
    description: `${product.summary} Sample product from the Baba Clothing concept catalogue.`,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = relatedProducts(product);

  return (
    <div className="pb-20 sm:pb-24">
      <Container className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[0.625rem] uppercase tracking-[0.18em] text-ink/60">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Home
              </Link>
            </li>
            <ChevronRight className="size-3" strokeWidth={1.5} aria-hidden="true" />
            <li>
              <Link href="/shop" className="transition-colors hover:text-ink">
                Shop
              </Link>
            </li>
            <ChevronRight className="size-3" strokeWidth={1.5} aria-hidden="true" />
            <li>
              <Link
                href={`/shop?category=${product.category}`}
                className="transition-colors hover:text-ink"
              >
                {category?.label}
              </Link>
            </li>
            <ChevronRight className="size-3" strokeWidth={1.5} aria-hidden="true" />
            <li aria-current="page" className="text-ink/70">
              {product.name}
            </li>
          </ol>
        </nav>
      </Container>

      <Container className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <ProductGallery images={product.images} productName={product.name} />

        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <p className="text-label text-ink/60">{category?.label}</p>
          <h1 className="mt-3 text-display text-[clamp(2.1rem,4.6vw,3.4rem)]">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <p className="text-lg tabular-nums">{formatPrice(product.price)}</p>
            <span className="border border-ink/15 px-2 py-1 text-[0.5625rem] uppercase tracking-[0.18em] text-ink/60">
              Illustrative demo price
            </span>
          </div>

          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
            {product.summary}
          </p>

          <div className="mt-8 border-t border-ink/10 pt-8">
            <AddToBag product={product} />
          </div>

          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            <details className="group py-4" open>
              <summary className="flex cursor-pointer list-none items-center justify-between text-label text-ink/70 marker:hidden">
                Details
                <Plus
                  className="size-3.5 transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </summary>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/60">
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </details>

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-label text-ink/70 marker:hidden">
                Delivery &amp; returns
                <Plus
                  className="size-3.5 transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                Not defined in this concept. Shipping, returns and payment terms must come
                from Baba Clothing before any real ordering is offered.
              </p>
            </details>

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-label text-ink/70 marker:hidden">
                About this content
                <Plus
                  className="size-3.5 transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                This piece is demonstration content. The name, price, colourways and
                imagery are illustrative and do not represent Baba Clothing stock.
              </p>
            </details>
          </div>
        </div>
      </Container>

      <Container className="mt-20 sm:mt-24">
        <SectionHeading
          eyebrow="Continue"
          title="You may also like"
          action={{ label: "All pieces", href: "/shop" }}
        />
        <div className="mt-10">
          <ProductGrid products={related} />
        </div>
      </Container>
    </div>
  );
}
