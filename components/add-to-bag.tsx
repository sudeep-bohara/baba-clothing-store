"use client";

import { useId, useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { useBag, MAX_QTY } from "@/components/bag-provider";
import { QuantityStepper } from "@/components/quantity-stepper";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/cn";

export function AddToBag({ product }: { product: Product }) {
  const { addItem, openBag } = useBag();
  const sizes = product.sizes ?? [];
  const colors = product.colors ?? [];
  const [size, setSize] = useState(sizes[0] ?? "");
  const [color, setColor] = useState(colors[0]?.name ?? "");
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState("");
  const sizeId = useId();
  const colorId = useId();

  const handleAdd = () => {
    addItem(product, {
      size: size || undefined,
      color: color || undefined,
      qty,
    });
    setStatus(`${product.name} added to your bag.`);
    setQty(1);
    openBag();
  };

  return (
    <div className="space-y-7">
      {sizes.length > 0 ? (
        <fieldset>
          <legend className="mb-3 flex w-full items-baseline justify-between">
            <span className="text-label text-ink/60">Size</span>
            <span className="text-xs text-ink/60">Sample sizing</span>
          </legend>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby={`${sizeId}-legend`}>
            <span id={`${sizeId}-legend`} className="sr-only">
              Choose a size
            </span>
            {sizes.map((option) => (
              <label
                key={option}
                className={cn(
                  "relative flex h-11 min-w-11 cursor-pointer items-center justify-center border px-3 text-sm transition-colors duration-200",
                  size === option
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink hover:border-ink/50",
                )}
              >
                <input
                  type="radio"
                  name={`size-${product.slug}`}
                  value={option}
                  checked={size === option}
                  onChange={() => setSize(option)}
                  className="absolute inset-0 cursor-pointer appearance-none opacity-0"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      {colors.length > 0 ? (
        <fieldset>
          <legend className="mb-3 flex w-full items-baseline justify-between">
            <span className="text-label text-ink/60">Colour</span>
            <span className="text-xs text-ink/60">{color}</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {colors.map((option) => (
              <label
                key={option.name}
                className="relative cursor-pointer"
                title={option.name}
              >
                <input
                  type="radio"
                  name={`colour-${product.slug}`}
                  value={option.name}
                  checked={color === option.name}
                  onChange={() => setColor(option.name)}
                  className="peer absolute inset-0 cursor-pointer appearance-none opacity-0"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "block size-8 rounded-full border transition-all duration-200",
                    color === option.name
                      ? "border-ink ring-1 ring-ink ring-offset-2 ring-offset-paper"
                      : "border-ink/20",
                  )}
                  style={{ backgroundColor: option.hex }}
                />
                <span className="sr-only">{option.name}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <div className="space-y-2">
          <span className="block text-label text-ink/60" id={`${colorId}-qty`}>
            Quantity
          </span>
          <QuantityStepper
            value={qty}
            onChange={setQty}
            max={MAX_QTY}
            label="Quantity"
          />
        </div>
        <Button
          type="button"
          size="lg"
          onClick={handleAdd}
          className="h-12 flex-1 sm:h-14 sm:min-w-56"
        >
          <ShoppingBag className="size-4" strokeWidth={1.5} aria-hidden="true" />
          Add to bag
        </Button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={cn(
          "flex items-center gap-2 text-xs text-ink/60",
          status ? "opacity-100" : "min-h-4",
        )}
      >
        {status ? (
          <>
            <Check className="size-3.5" strokeWidth={2} aria-hidden="true" />
            {status}
          </>
        ) : null}
      </p>
    </div>
  );
}
