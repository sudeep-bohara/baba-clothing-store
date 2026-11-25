import type { Metadata } from "next";
import Image from "next/image";
import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { campaign } from "@/lib/media";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "A concept storefront for Baba Clothing — the thinking behind the monochrome, editorial direction.",
  path: "/about",
});

const isList = [
  "A design concept for a premium, monochrome storefront.",
  "A working shop, bag and product-detail demonstration.",
  "A mobile-first, accessible layout you can review on any device.",
];

const isNotList = [
  "The official Baba Clothing website.",
  "A live catalogue, stock list or price list.",
  "A checkout, payment or delivery service.",
  "A source of verified business or contact details.",
];

export default function AboutPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <Container className="pt-10 sm:pt-14">
        <p className="text-label text-ink/60">About</p>
        <h1 className="mt-5 max-w-4xl text-display text-[clamp(2.4rem,6.4vw,4.8rem)]">
          A storefront for a two-colour identity.
        </h1>
        <div className="mt-10 grid gap-8 border-t border-ink/10 pt-8 md:grid-cols-2 md:gap-16">
          <p className="text-[0.95rem] leading-relaxed text-ink/70">
            Baba Clothing works in black and white. The slogan reads &ldquo;
            {site.slogan}&rdquo; and the mark is a monogram. Everything in this concept
            follows from those three facts — no extra colours, no decorative noise, no
            borrowed imagery pretending to be the brand&rsquo;s own.
          </p>
          <p className="text-[0.95rem] leading-relaxed text-ink/65">
            This page is placeholder brand copy. Real history, founder details and
            production notes are deliberately left out until Baba Clothing supplies
            approved wording.
          </p>
        </div>
      </Container>

      <Container className="mt-14">
        <Reveal>
          <div className="relative aspect-16/9 w-full overflow-hidden bg-bone sm:aspect-21/9">
            <Image
              src={campaign.store.src}
              alt={campaign.store.alt}
              fill
              preload
              sizes="100vw"
              style={{ objectPosition: campaign.store.focal }}
              className="photo object-cover"
            />
          </div>
        </Reveal>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <SectionHeading eyebrow="Positioning" title="What this concept is" />
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-label text-ink/60">It is</h3>
            <ul className="mt-5 space-y-4">
              {isList.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/70">
                  <span aria-hidden="true" className="mt-2.5 block h-px w-5 shrink-0 bg-ink/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-label text-ink/60">It is not</h3>
            <ul className="mt-5 space-y-4">
              {isNotList.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/65">
                  <span aria-hidden="true" className="mt-2.5 block h-px w-5 shrink-0 bg-ink/20" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <section className="mt-20 bg-ink py-16 text-paper sm:mt-24 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-display text-[clamp(2rem,5vw,3.8rem)] italic">
              {site.slogan}
            </p>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-paper/65">
              The line is used exactly as the brand shows it. It anchors the homepage,
              the footer and the campaign sections without being repeated into
              meaninglessness.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {[campaign.craft, campaign.lookbook[2]].map((image) => (
              <div key={image.src} className="relative aspect-4/5 overflow-hidden bg-charcoal">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  style={{ objectPosition: image.focal }}
                  className="photo object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="mt-16 sm:mt-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-label text-ink/60">Direction</p>
            <h2 className="mt-5 text-display text-[clamp(1.9rem,4.2vw,3rem)]">
              Restraint, at every size
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
              The layout uses one serif for editorial voice, one grotesque for interface
              text, and a four-step spacing rhythm. Photography is converted to
              monochrome so mixed sources read as a single campaign.
            </p>
            <ButtonLink href="/shop" variant="outline" size="lg" className="mt-8">
              Browse the capsule
            </ButtonLink>
          </div>

          <div id="credits" className="scroll-mt-28">
            <p className="text-label text-ink/60">Credits</p>
            <h2 className="mt-5 text-display text-[clamp(1.9rem,4.2vw,3rem)]">
              Image credits
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/65">
              Every photograph in this concept is a CC0 or public-domain image sourced
              through Openverse and stored locally. None of it is Baba Clothing&rsquo;s
              own photography, and none of it should be used as final campaign imagery.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              The full file-by-file manifest, with source links and licences, lives in
              <span className="text-ink/70">docs/ASSETS.md</span> in the repository.
            </p>
            <ButtonLink
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              variant="quiet"
              size="sm"
              className="mt-6 border-b border-ink px-0 pb-1"
            >
              <InstagramIcon className="size-4" strokeWidth={1.5} aria-hidden="true" />
              {site.instagram.handle}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
