import { Container } from "@/components/ui/container";

export type PolicySection = {
  heading: string;
  body: string[];
};

export function PolicyPage({
  eyebrow,
  title,
  intro,
  sections,
  footer,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: PolicySection[];
  footer?: string;
}) {
  return (
    <div className="pb-20 sm:pb-24">
      <Container className="pt-10 pb-8 sm:pt-14">
        <p className="text-label text-ink/60">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-display text-[clamp(2.4rem,6vw,4.2rem)]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-ink/70">{intro}</p>
        <p className="mt-6 inline-flex border border-ink/20 px-3 py-2 text-[0.5625rem] uppercase tracking-[0.2em] text-ink/70">
          Draft · not approved for production use
        </p>
      </Container>

      <Container className="grid gap-12 border-t border-ink/12 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <nav aria-label={`${eyebrow} sections`} className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-label text-ink/60">On this page</h2>
          <ol className="mt-4 space-y-2.5">
            {sections.map((section, index) => (
              <li key={section.heading} className="flex gap-3 text-sm text-ink/65">
                <span className="tabular-nums text-ink/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{section.heading}</span>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-label text-ink/70">
                <span className="mr-3 tabular-nums text-ink/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-ink/70">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {footer ? (
            <p className="border-t border-ink/12 pt-6 text-xs leading-relaxed text-ink/60">
              {footer}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
