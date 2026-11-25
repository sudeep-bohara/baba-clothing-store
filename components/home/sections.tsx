import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { campaign } from "@/lib/media";
import { collections as allCollections } from "@/lib/collections";
import { site } from "@/lib/site";

export function SloganMarquee() {
  const items = [site.slogan, "Sample capsule 01", "Black & white", "Editorial wardrobe"];
  const track = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-b border-paper/10 bg-ink py-4 text-paper" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center whitespace-nowrap">
            <span
              className={
                index % 2 === 0
                  ? "text-display px-8 text-[1.35rem] italic sm:text-[1.6rem]"
                  : "text-label px-8 text-paper/60"
              }
            >
              {item}
            </span>
            <span className="text-paper/25">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const homeCollections = ["tailoring", "denim", "essentials"] as const;

const collectionTiles = homeCollections
  .map((slug) => allCollections.find((collection) => collection.slug === slug))
  .filter((collection) => collection !== undefined);

export function Collections() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Collections"
          title="Where to start"
          action={{ label: "All collections", href: "/collections" }}
        />
        <ul className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {collectionTiles.map((tile, index) => (
              <li key={tile.slug}>
                <Reveal delay={index * 0.06}>
                  <Link href={`/collections/${tile.slug}`} className="group block">
                    <div className="relative aspect-4/3 overflow-hidden bg-bone">
                      <Image
                        src={tile.image.src}
                        alt={tile.image.alt}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        style={{ objectPosition: tile.image.focal }}
                        className="photo object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-4 border-t border-ink/12 pt-3">
                      <div>
                        <h3 className="text-label">{tile.label}</h3>
                        <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-ink/65">
                          {tile.blurb}
                        </p>
                        <p className="mt-2 text-[0.625rem] uppercase tracking-[0.2em] text-ink/60">
                          {tile.items.length} sample {tile.items.length === 1 ? "piece" : "pieces"}
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
    </section>
  );
}

export function CampaignSplit() {
  return (
    <section className="bg-ink text-paper">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <Reveal>
          <div className="relative aspect-square overflow-hidden bg-charcoal">
            <Image
              src={campaign.lookbook[1].src}
              alt={campaign.lookbook[1].alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              style={{ objectPosition: campaign.lookbook[1].focal }}
              className="photo object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-label text-paper/60">The campaign</p>
          <h2 className="mt-5 text-display text-[clamp(2.2rem,5vw,4rem)]">
            Cut clean.
            <br />
            <span className="italic">Worn quietly.</span>
          </h2>
          <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-paper/60">
            Every piece in the sample capsule is built around the same idea: a strong
            silhouette, a neutral palette, and nothing that competes with the person
            wearing it.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-paper/15 pt-6 text-paper/70">
            <div>
              <dt className="text-[0.625rem] uppercase tracking-[0.2em] text-paper/60">
                Palette
              </dt>
              <dd className="mt-2 text-sm">Black · Bone</dd>
            </div>
            <div>
              <dt className="text-[0.625rem] uppercase tracking-[0.2em] text-paper/60">
                Focus
              </dt>
              <dd className="mt-2 text-sm">Silhouette</dd>
            </div>
            <div>
              <dt className="text-[0.625rem] uppercase tracking-[0.2em] text-paper/60">
                Season
              </dt>
              <dd className="mt-2 text-sm">Capsule 01</dd>
            </div>
          </dl>
          <div className="mt-10">
            <ButtonLink href="/shop" variant="onDark" size="lg">
              Shop the edit
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function LookbookGrid() {
  const frames = campaign.editorial.slice(0, 3);
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Lookbook" title="Frames from the studio" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {frames.map((frame, index) => (
            <li key={frame.src}>
              <Reveal delay={index * 0.06}>
                <figure>
                  <div className="relative aspect-3/4 overflow-hidden bg-bone">
                    <Image
                      src={frame.src}
                      alt={frame.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      style={{ objectPosition: frame.focal }}
                      className="photo object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 flex justify-between text-[0.625rem] uppercase tracking-[0.2em] text-ink/60">
                    <span>Frame {String(index + 1).padStart(2, "0")}</span>
                    <span>Studio</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Statement() {
  return (
    <section className="border-y border-ink/10 bg-bone">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="text-label text-ink/60">The idea</p>
            <p className="mt-6 text-display text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[0.95]">
              Black and white,
              <br />
              with nothing in the way.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-ink/65">
              Baba Clothing&rsquo;s existing identity leans on two colours, one slogan and
              a strong mark. This concept keeps that restraint: type does the talking,
              photography stays monochrome, and the clothing carries the page.
            </p>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-ink/60">
              Brand story copy is placeholder until the owner supplies approved wording.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-label"
            >
              Read the full story
              <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function SocialStrip() {
  const frames = campaign.socialFeed;
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-label text-ink/60">Social</p>
          <h2 className="mt-5 text-display text-[clamp(2rem,4.6vw,3.4rem)]">
            Follow the shop floor
          </h2>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink/60">
            New drops, fittings and campaign frames are posted to Instagram first.
          </p>
          <ButtonLink
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer noopener"
            variant="outline"
            size="lg"
            className="mt-8"
          >
            <InstagramIcon className="size-4" strokeWidth={1.5} aria-hidden="true" />
            {site.instagram.handle}
          </ButtonLink>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-ink/60">
            Demo imagery below is licensed stock, not Baba Clothing&rsquo;s own feed.
          </p>
        </Reveal>

        <ul className="grid grid-cols-3 gap-3 sm:gap-4">
          {frames.map((frame, index) => (
            <li key={frame.src}>
              <Reveal delay={index * 0.05}>
                <div className="relative aspect-square overflow-hidden bg-bone">
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(min-width: 1024px) 18vw, 33vw"
                    style={{ objectPosition: frame.focal }}
                    className="photo object-cover"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
