"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 9,
  label = "Quantity",
  tone = "light",
  size = "md",
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  label?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md";
}) {
  const buttonClass = cn(
    "flex items-center justify-center transition-colors duration-200 disabled:opacity-30",
    size === "sm" ? "size-8" : "size-11",
  );
  const borderClass = tone === "dark" ? "border-paper/25" : "border-ink/20";

  return (
    <div
      className={cn("inline-flex items-center border", borderClass)}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={`Decrease ${label.toLowerCase()}`}
      >
        <Minus className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
      </button>
      <span
        className={cn(
          "min-w-7 text-center text-sm tabular-nums",
          size === "sm" ? "px-1" : "px-2",
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Increase ${label.toLowerCase()}`}
      >
        <Plus className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
      </button>
    </div>
  );
}
