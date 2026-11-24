import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { collections } from "@/lib/collections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Collections",
  description:
    "Five sample collections — outerwear, tailoring, denim, essentials and accessories. Demonstration concept only.",
  path: "/collections",
});

export default function CollectionsPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <Container className="pt-10 pb-10 sm:pt-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-label text-ink/60">Collections</p>
            <h1 className="mt-4 text-display text-[clamp(2.6rem,7vw,5rem)]">
              Five ways in
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/65">
            Each collection groups a small set of sample pieces. The groupings, names and
            images are demonstration content, not Baba Clothing&rsquo;s live range.
          </p>
        </div>
      </Container>

      <Container>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {collections.map((collection, index) => (
            <li key={collection.slug}>
              <Reveal delay={index * 0.05}>
                <Link href={`/collections/${collection.slug}`} className="group block">
                  <div className="relative aspect-4/5 overflow-hidden bg-bone">
                    <Image
                      src={collection.image.src}
                      alt={collection.image.alt}
                      fill
                      preload={index === 0}
                      sizes="(min-width: 1024px) 19vw, (min-width: 640px) 45vw, 100vw"
                      style={{ objectPosition: collection.image.focal }}
                      className="photo object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4 border-t border-ink/12 pt-3">
                    <div>
                      <h2 className="text-label">{collection.label}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">
                        {collection.blurb}
                      </p>
                      <p className="mt-2 text-[0.625rem] uppercase tracking-[0.2em] text-ink/60">
                        {collection.items.length} sample{" "}
                        {collection.items.length === 1 ? "piece" : "pieces"}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-0.5 size-4 shrink-0 text-ink/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
