import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { campaign } from "@/lib/media";

export function Hero() {
  return (
    <section className="border-b border-ink/10">
      <Container className="grid items-center gap-10 py-8 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-16">
        <div className="order-2 lg:order-1">
          <Reveal distance={16}>
            <p className="text-label text-ink/60">Concept study — 01</p>
            <h1 className="mt-5 text-display text-[clamp(3rem,10.5vw,6.25rem)] text-ink">
              Your style,
              <br />
              <span className="italic">Your identity.</span>
            </h1>
            <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
              A monochrome capsule of tailoring, denim and everyday essentials, presented
              as a storefront concept for Baba Clothing.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/shop" size="lg">
                Shop the capsule
              </ButtonLink>
              <ButtonLink href="/about" variant="outline" size="lg">
                Read the concept
              </ButtonLink>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[0.625rem] uppercase tracking-[0.2em] text-ink/60">
              <li>Sample catalogue</li>
              <li>Illustrative prices</li>
              <li>No checkout</li>
            </ul>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-bone sm:aspect-3/4 lg:aspect-auto lg:h-[min(78vh,46rem)]">
            <Image
              src={campaign.hero.src}
              alt={campaign.hero.alt}
              fill
              preload
              sizes="(min-width: 1024px) 48vw, 100vw"
              style={{ objectPosition: campaign.hero.focal }}
              className="photo object-cover"
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between text-[0.625rem] uppercase tracking-[0.2em] text-ink/60">
            <span>Campaign 01 — Studio</span>
            <span>Monochrome</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
