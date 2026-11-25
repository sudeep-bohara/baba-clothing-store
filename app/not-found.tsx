import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  // Next marks the not-found route noindex on its own; declaring the title here stops the
  // homepage title and canonical from being inherited.
  alternates: {},
};

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
      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink href="/shop" size="lg" className="w-full sm:w-auto">
          Browse the shop
        </ButtonLink>
        <ButtonLink href="/" variant="outline" size="lg" className="w-full sm:w-auto">
          Back home
        </ButtonLink>
      </div>
    </Container>
  );
}
