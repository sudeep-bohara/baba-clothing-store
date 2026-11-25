import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/product-card";
import { collections, getCollection } from "@/lib/collections";
import { pageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection not found" };
  return pageMetadata({
    title: collection.label,
    description: `${collection.summary} Sample collection from the Baba Clothing concept.`,
    path: `/collections/${collection.slug}`,
  });
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const others = collections.filter((item) => item.slug !== collection.slug);

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
              <Link href="/collections" className="transition-colors hover:text-ink">
                Collections
              </Link>
            </li>
            <ChevronRight className="size-3" strokeWidth={1.5} aria-hidden="true" />
            <li aria-current="page" className="text-ink/70">
              {collection.label}
            </li>
          </ol>
        </nav>
      </Container>

      <Container className="pt-8 pb-10">
        <div className="flex flex-col gap-6 border-b border-ink/12 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-label text-ink/60">Collection</p>
            <h1 className="mt-4 text-display text-[clamp(2.6rem,7vw,5rem)]">
              {collection.label}
            </h1>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-ink/65">{collection.summary}</p>
            <p className="mt-3 text-[0.625rem] uppercase tracking-[0.2em] text-ink/60">
              {collection.items.length} sample{" "}
              {collection.items.length === 1 ? "piece" : "pieces"} · Illustrative prices
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <h2 className="sr-only">{collection.label} pieces</h2>
        <ProductGrid products={collection.items} preloadCount={1} />
      </Container>

      <Container className="mt-20 sm:mt-24">
        <SectionHeading
          eyebrow="Keep looking"
          title="Other collections"
          action={{ label: "All collections", href: "/collections" }}
        />
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/collections/${item.slug}`}
                className="group inline-flex items-baseline gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
                <span className="text-[0.625rem] uppercase tracking-[0.2em] text-ink/50 group-hover:text-ink/70">
                  {item.items.length}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
