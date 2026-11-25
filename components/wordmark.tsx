import Link from "next/link";
import { cn } from "@/lib/cn";

/** Text wordmark placeholder — the BA monogram must not be recreated until an
 *  approved asset is supplied by the brand owner. */
export function Wordmark({
  className,
  tone = "light",
  size = "md",
}: {
  className?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const scale = {
    sm: { main: "text-[0.95rem] tracking-[0.3em]", sub: "text-[0.42rem] tracking-[0.46em]" },
    md: { main: "text-[1.15rem] tracking-[0.34em]", sub: "text-[0.46rem] tracking-[0.5em]" },
    lg: { main: "text-[1.6rem] tracking-[0.36em]", sub: "text-[0.55rem] tracking-[0.56em]" },
  }[size];

  return (
    <Link
      href="/"
      aria-label="Baba Clothing — home"
      className={cn(
        "group flex flex-col items-center leading-none",
        tone === "dark" ? "text-paper" : "text-ink",
        className,
      )}
    >
      <span className={cn("font-medium uppercase", scale.main)}>BABA</span>{" "}
      <span className={cn("mt-[0.35em] font-medium uppercase opacity-80", scale.sub)}>
        Clothing
      </span>
    </Link>
  );
}
