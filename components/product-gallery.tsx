"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ProductImage } from "@/lib/products";
import { cn } from "@/lib/cn";

export function ProductGallery({
  images,
  productName,
}: {
  images: ProductImage[];
  productName: string;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = images[index] ?? images[0];
  // The first frame is the LCP candidate: paint it immediately, fade only swaps.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot flag so the initial frame skips its entrance fade
    setMounted(true);
  }, []);

  return (
    <div className="flex min-w-0 flex-col-reverse gap-4 sm:flex-row sm:gap-5">
      {images.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto no-scrollbar sm:w-20 sm:flex-col sm:overflow-visible">
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(imageIndex)}
              aria-label={`View image ${imageIndex + 1} of ${images.length}`}
              aria-pressed={index === imageIndex}
              className={cn(
                "relative aspect-4/5 w-16 shrink-0 overflow-hidden bg-bone transition-opacity duration-300 sm:w-full",
                index === imageIndex
                  ? "opacity-100 ring-1 ring-ink"
                  : "opacity-60 hover:opacity-100",
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="80px"
                quality={60}
                style={{ objectPosition: image.focal }}
                className="photo object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}

      <div className="relative aspect-4/5 min-w-0 flex-1 overflow-hidden bg-bone">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={active.src}
            className="absolute inset-0"
            initial={reduceMotion || !mounted ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={active.src}
              alt={active.alt || `${productName} — demonstration image`}
              fill
              preload
              loading="eager"
              sizes="(min-width: 1024px) 46vw, 100vw"
              style={{ objectPosition: active.focal }}
              className="photo object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
