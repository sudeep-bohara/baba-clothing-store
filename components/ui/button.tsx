import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "onDark" | "quiet";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 text-label whitespace-nowrap transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:cursor-not-allowed disabled:opacity-45";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-charcoal",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  onDark:
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  quiet: "text-ink hover:text-ink/60",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4",
  md: "h-12 px-6",
  lg: "h-14 px-8",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "children" | "className"
  >) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
