import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-20">
      <p className="text-label text-ink/60">404</p>
      <h1 className="mt-5 max-w-2xl text-display text-[clamp(2.4rem,7vw,4.5rem)]">
        This page is not in the capsule.
      </h1>
      <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
        The link may be out of date, or the piece may not exist in this demonstration
        catalogue.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/shop" size="lg">
          Browse the shop
        </ButtonLink>
        <ButtonLink href="/" variant="outline" size="lg">
          Back home
        </ButtonLink>
      </div>
    </Container>
  );
}
