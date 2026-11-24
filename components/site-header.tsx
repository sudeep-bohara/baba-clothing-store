"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, ShoppingBag, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/wordmark";
import { useBag } from "@/components/bag-provider";
import { useLockBodyScroll } from "@/lib/use-lock-body-scroll";
import { primaryNav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, hydrated, openBag } = useBag();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const bagCount = hydrated ? count : 0;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
      <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 md:h-20">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative text-label py-2 transition-colors duration-300",
                      active ? "text-ink" : "text-ink/60 hover:text-ink",
                      "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-ink after:transition-all after:duration-300",
                      active ? "after:w-full" : "after:w-0 hover:after:w-full",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          className="-ml-2 flex size-11 items-center justify-center text-ink md:hidden"
        >
          <Menu className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </button>

        <Wordmark />

        <div className="flex items-center justify-end gap-1">
          <Link
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden text-label text-ink/60 transition-colors hover:text-ink lg:inline-flex lg:px-3 lg:py-2"
          >
            Instagram
          </Link>
          <button
            type="button"
            onClick={openBag}
            className="group relative flex h-11 items-center gap-2 px-2 text-label text-ink"
          >
            <ShoppingBag
              className="size-[1.15rem]"
              strokeWidth={1.4}
              aria-hidden="true"
            />
            <span className="hidden sm:inline">Bag</span>
            <span className="sr-only sm:hidden">Bag</span>
            <span
              aria-hidden="true"
              className={cn(
                "min-w-5 rounded-full px-1 text-center text-[0.625rem] leading-5 transition-colors",
                count > 0 ? "bg-ink text-paper" : "text-ink/60",
              )}
            >
              {bagCount}
            </span>
            <span className="sr-only">{bagCount === 1 ? "1 item" : `${bagCount} items`}</span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-16 items-center justify-between border-b border-ink/10 px-5">
              <Wordmark size="sm" />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="-mr-2 flex size-11 items-center justify-center"
              >
                <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-8">
              <ul className="flex flex-col">
                {[{ label: "Home", href: "/" }, ...primaryNav, { label: "Bag", href: "/bag" }].map(
                  (item, index) => (
                    <motion.li
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
                      className="border-b border-ink/10"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-baseline justify-between py-5"
                      >
                        <span className="text-display text-[2rem]">{item.label}</span>
                        <ArrowUpRight
                          className="size-4 text-ink/60"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </Link>
                    </motion.li>
                  ),
                )}
              </ul>

              <div className="mt-10 space-y-2">
                <p className="text-label text-ink/60">Follow</p>
                <Link
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-sm text-ink underline underline-offset-4"
                >
                  {site.instagram.handle} on Instagram
                </Link>
              </div>
            </nav>

            <p className="border-t border-ink/10 px-5 py-5 text-xs leading-relaxed text-ink/65">
              Concept demonstration — sample products and illustrative prices. Ordering is
              not enabled.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
