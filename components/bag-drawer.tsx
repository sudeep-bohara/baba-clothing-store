"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useBag, MAX_QTY } from "@/components/bag-provider";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Button, ButtonLink } from "@/components/ui/button";
import { useLockBodyScroll } from "@/lib/use-lock-body-scroll";
import { formatPrice } from "@/lib/format";

export function BagDrawer() {
  const { entries, count, subtotal, isOpen, closeBag, setQty, remove } = useBag();
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const [notice, setNotice] = useState("");

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    restoreRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();

    const focusable = () => {
      const root = panelRef.current;
      if (!root) return [];
      return Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeBag();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (!(active instanceof HTMLElement) || !panelRef.current?.contains(active)) {
        event.preventDefault();
        first.focus();
        return;
      }
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      restoreRef.current?.focus();
    };
  }, [isOpen, closeBag]);

  return (
    <AnimatePresence onExitComplete={() => setNotice("")}>
      {isOpen ? (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping bag">
          <motion.button
            type="button"
            aria-label="Close bag"
            tabIndex={-1}
            onClick={closeBag}
            className="absolute inset-0 bg-ink/45"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            ref={panelRef}
            className="absolute inset-y-0 right-0 flex w-full max-w-[26.5rem] flex-col bg-paper"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: "100%" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
              <h2 className="text-label">
                Bag{count > 0 ? ` (${count})` : ""}
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={closeBag}
                aria-label="Close bag"
                className="-mr-2 flex size-11 items-center justify-center"
              >
                <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>

            {entries.length === 0 ? (
              <div className="flex flex-1 flex-col items-start justify-center gap-5 px-5">
                <p className="text-display text-3xl">Your bag is empty</p>
                <p className="text-sm leading-relaxed text-ink/60">
                  Add a piece from the sample catalogue to see how the bag behaves.
                </p>
                <ButtonLink href="/shop" variant="outline" onClick={closeBag}>
                  Browse the shop
                </ButtonLink>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-ink/10 overflow-y-auto px-5">
                  {entries.map((entry) => (
                    <li key={entry.key} className="flex gap-4 py-5">
                      <Link
                        href={`/products/${entry.product.slug}`}
                        onClick={closeBag}
                        className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden bg-bone"
                      >
                        <Image
                          src={entry.product.images[0].src}
                          alt=""
                          fill
                          sizes="80px"
                          className="photo object-cover"
                        />
                      </Link>
                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <Link
                              href={`/products/${entry.product.slug}`}
                              onClick={closeBag}
                              className="block truncate text-sm font-medium hover:underline underline-offset-4"
                            >
                              {entry.product.name}
                            </Link>
                            <p className="mt-1 text-xs text-ink/65">
                              {[entry.size, entry.color].filter(Boolean).join(" · ") ||
                                "One size"}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => remove(entry.key)}
                            className="shrink-0 text-xs text-ink/60 underline underline-offset-4 transition-colors hover:text-ink"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <QuantityStepper
                            value={entry.qty}
                            onChange={(next) => setQty(entry.key, next)}
                            max={MAX_QTY}
                            size="sm"
                            label={`Quantity for ${entry.product.name}`}
                          />
                          <span className="text-sm tabular-nums">
                            {formatPrice(entry.lineTotal)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 border-t border-ink/10 px-5 py-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-label text-ink/65">Subtotal</span>
                    <span className="text-lg tabular-nums">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-ink/60">
                    Illustrative demo pricing. No payment, delivery or order processing is
                    connected to this concept.
                  </p>
                  <div className="grid gap-2">
                    <Button
                      type="button"
                      onClick={() =>
                        setNotice("Demo only — ordering is not enabled in this concept.")
                      }
                    >
                      Proceed to checkout
                    </Button>
                    <ButtonLink href="/bag" variant="outline" onClick={closeBag}>
                      Review bag
                    </ButtonLink>
                  </div>
                  <p role="status" aria-live="polite" className="min-h-4 text-xs text-ink/70">
                    {notice}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
