import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-label text-ink/65", className)}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
  className,
  tone = "light",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  action?: { label: string; href: string };
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-6 border-b pb-6",
        tone === "dark" ? "border-paper/15" : "border-ink/12",
        className,
      )}
    >
      <div className="space-y-3">
        {eyebrow ? (
          <p
            className={cn(
              "text-label",
              tone === "dark" ? "text-paper/65" : "text-ink/65",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-display text-[clamp(2rem,4.4vw,3.6rem)]",
            tone === "dark" ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
      </div>
      {action ? (
        <Link
          href={action.href}
          className={cn(
            "group inline-flex items-center gap-2 text-label",
            tone === "dark" ? "text-paper/80 hover:text-paper" : "text-ink/70 hover:text-ink",
          )}
        >
          {action.label}
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </div>
  );
}
