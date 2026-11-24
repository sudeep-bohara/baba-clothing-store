import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { contactPlaceholders, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact placeholders for the Baba Clothing storefront concept. Business details will be published once verified.",
};

const icons = [MapPin, Mail, Phone, Mail, MapPin];

export default function ContactPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <Container className="pt-10 sm:pt-14">
        <p className="text-label text-ink/60">Contact</p>
        <h1 className="mt-5 max-w-3xl text-display text-[clamp(2.4rem,6.4vw,4.8rem)]">
          Talk to the shop.
        </h1>
        <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">
          Only the Instagram account is verified for this concept. Everything else below
          is a deliberate placeholder, waiting on confirmed details from Baba Clothing.
        </p>
      </Container>

      <Container className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div className="border border-ink/10 bg-bone p-6 sm:p-8">
            <h2 className="text-label text-ink/65">Verified channel</h2>
            <p className="mt-4 text-display text-[clamp(1.8rem,4vw,2.4rem)]">
              Instagram
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              Campaign frames, fittings and new pieces are posted here.
            </p>
            <ButtonLink
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
              className="mt-6 w-full sm:w-auto"
            >
              <InstagramIcon className="size-4" strokeWidth={1.5} aria-hidden="true" />
              {site.instagram.handle}
            </ButtonLink>
            <p className="mt-6 text-xs leading-relaxed text-ink/60">
              Opens instagram.com in a new tab. This concept does not include a contact
              form and does not collect personal data.
            </p>
          </div>
        </Reveal>

        <div>
          <h2 className="text-label text-ink/65">Pending confirmation</h2>
          <dl className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
            {contactPlaceholders.map((item, index) => {
              const Icon = icons[index] ?? MapPin;
              return (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-6 py-5"
                >
                  <dt className="flex items-center gap-3 text-sm text-ink/75">
                    <Icon className="size-4 text-ink/60" strokeWidth={1.5} aria-hidden="true" />
                    {item.label}
                  </dt>
                  <dd className="shrink-0 border border-ink/15 px-2 py-1 text-[0.5625rem] uppercase tracking-[0.16em] text-ink/60">
                    {item.status}
                  </dd>
                </div>
              );
            })}
          </dl>
          <p className="mt-6 max-w-lg text-xs leading-relaxed text-ink/60">
            Addresses, hours, phone numbers and service areas are intentionally omitted.
            Publishing unverified details would misrepresent the business.
          </p>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <div className="border-t border-ink/10 pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-label text-ink/60">For the owner</p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ink/65">
                Send the final address, opening hours, phone or WhatsApp number, email and
                delivery coverage, plus approved logo files and product photography. Each
                placeholder above can then be replaced in a single configuration file.
              </p>
            </div>
            <ButtonLink href="/shop" variant="outline" size="lg">
              See the shop
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
