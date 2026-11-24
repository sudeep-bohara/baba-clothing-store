import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/wordmark";
import { footerNav, footerSecondaryNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-paper/10 bg-ink text-paper">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div className="max-w-sm">
            <Wordmark tone="dark" size="lg" className="items-start" />
            <p className="mt-8 text-display text-[clamp(1.75rem,3.4vw,2.5rem)] text-paper">
              {site.slogan}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              A storefront concept built to show how Baba Clothing could feel online.
              Sample catalogue, illustrative prices, no checkout.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-label text-paper/60">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-label text-paper/60">Elsewhere</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-paper/75 transition-colors hover:text-paper"
                >
                  <InstagramIcon className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  {site.instagram.handle}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-paper/75 transition-colors hover:text-paper"
                >
                  Contact details
                </Link>
              </li>
              <li>
                <Link
                  href="/about#credits"
                  className="text-sm text-paper/75 transition-colors hover:text-paper"
                >
                  Image credits
                </Link>
              </li>
              {footerSecondaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#top"
              className="mt-10 inline-flex items-center gap-2 text-label text-paper/60 transition-colors hover:text-paper"
            >
              Back to top
              <ArrowUp className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Unofficial concept study for {site.name} · Not the official store · No orders are
            processed.
          </p>
          <p>Demonstration content · Sample products and illustrative prices</p>
        </div>
      </Container>
    </footer>
  );
}
