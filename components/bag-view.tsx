"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useBag, MAX_QTY } from "@/components/bag-provider";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Button, ButtonLink } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { products } from "@/lib/products";

export function BagView() {
  const { entries, count, subtotal, hydrated, setQty, remove, clear } = useBag();
  const [notice, setNotice] = useState("");

  return (
    <div className="pb-20 sm:pb-24">
      <div className="mx-auto w-full max-w-[1600px] px-5 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-label text-ink/60">Bag</p>
            <h1 className="mt-4 text-display text-[clamp(2.6rem,7vw,5rem)]">
              Shopping bag
            </h1>
          </div>
          <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-ink/60" aria-live="polite">
            {hydrated ? `${count} ${count === 1 ? "item" : "items"}` : "\u00a0"}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mt-10 border-t border-ink/10 pt-8">
          {!hydrated ? (
            <p className="text-sm text-ink/60">Loading your bag…</p>
          ) : entries.length === 0 ? (
            <div className="grid gap-8 border border-ink/10 bg-bone px-6 py-16 sm:place-items-center sm:text-center">
              <div className="max-w-md">
                <p className="text-display text-[clamp(1.8rem,4vw,2.6rem)]">
                  Your bag is empty
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  Nothing added yet. The sample capsule has {products.length} pieces to explore.
                </p>
              </div>
              <ButtonLink href="/shop" size="lg">
                Browse the capsule
              </ButtonLink>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[1.5fr_0.9fr] lg:gap-16">
              <div>
                <ul className="divide-y divide-ink/10 border-y border-ink/10">
                  {entries.map((entry) => (
                    <li key={entry.key} className="flex gap-4 py-6 sm:gap-6">
                      <Link
                        href={`/products/${entry.product.slug}`}
                        className="relative aspect-4/5 w-24 shrink-0 overflow-hidden bg-bone sm:w-32"
                      >
                        <Image
                          src={entry.product.images[0].src}
                          alt={entry.product.images[0].alt}
                          fill
                          sizes="128px"
                          style={{ objectPosition: entry.product.images[0].focal }}
                          className="photo object-cover"
                        />
                      </Link>

                      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <Link
                              href={`/products/${entry.product.slug}`}
                              className="text-sm font-medium hover:underline underline-offset-4 sm:text-base"
                            >
                              {entry.product.name}
                            </Link>
                            <p className="mt-1 text-xs text-ink/65">
                              {[entry.size && `Size ${entry.size}`, entry.color]
                                .filter(Boolean)
                                .join(" · ") || "One size"}
                            </p>
                            <p className="mt-1 text-xs text-ink/60">
                              {formatPrice(entry.product.price)} each
                            </p>
                          </div>
                          <p className="shrink-0 text-sm tabular-nums">
                            {formatPrice(entry.lineTotal)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <QuantityStepper
                            value={entry.qty}
                            onChange={(next) => setQty(entry.key, next)}
                            max={MAX_QTY}
                            size="sm"
                            label={`Quantity for ${entry.product.name}`}
                          />
                          <button
                            type="button"
                            onClick={() => remove(entry.key)}
                            className="inline-flex items-center gap-1.5 text-xs text-ink/60 underline underline-offset-4 transition-colors hover:text-ink"
                          >
                            <Trash2 className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 text-label text-ink/60 transition-colors hover:text-ink"
                  >
                    <ArrowLeft className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                    Continue shopping
                  </Link>
                  <button
                    type="button"
                    onClick={clear}
                    className="text-xs text-ink/60 underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    Clear bag
                  </button>
                </div>
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="border border-ink/10 bg-bone p-6">
                  <h2 className="text-label text-ink/65">Summary</h2>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex items-baseline justify-between">
                      <dt className="text-ink/60">Subtotal</dt>
                      <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
                    </div>
                    <div className="flex items-baseline justify-between text-ink/60">
                      <dt>Delivery</dt>
                      <dd className="text-xs uppercase tracking-[0.16em]">Not calculated</dd>
                    </div>
                    <div className="flex items-baseline justify-between border-t border-ink/10 pt-3">
                      <dt className="text-label">Total</dt>
                      <dd className="text-lg tabular-nums">{formatPrice(subtotal)}</dd>
                    </div>
                  </dl>

                  <p className="mt-5 text-xs leading-relaxed text-ink/65">
                    Illustrative demo pricing. This concept does not connect to payment,
                    delivery or order processing.
                  </p>

                  <Button
                    type="button"
                    size="lg"
                    className="mt-6 w-full"
                    onClick={() =>
                      setNotice("Demo only — ordering is not enabled in this concept.")
                    }
                  >
                    Checkout
                  </Button>
                  <p
                    role="status"
                    aria-live="polite"
                    className="mt-3 min-h-4 text-xs text-ink/70"
                  >
                    {notice}
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
