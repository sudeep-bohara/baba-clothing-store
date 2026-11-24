"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, SearchX } from "lucide-react";
import { ProductGrid } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { categories, products, type CategoryId } from "@/lib/products";
import { cn } from "@/lib/cn";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "new", label: "Newest" },
  { id: "price-asc", label: "Price — low to high" },
  { id: "price-desc", label: "Price — high to low" },
  { id: "name", label: "Name — A to Z" },
] as const;

type SortId = (typeof sortOptions)[number]["id"];

function isCategory(value: string | null): value is CategoryId {
  return categories.some((category) => category.id === value);
}

function isSort(value: string | null): value is SortId {
  return sortOptions.some((option) => option.id === value);
}

export function ShopBrowser() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");
  const sortParam = searchParams.get("sort");
  const activeCategory = isCategory(categoryParam) ? categoryParam : null;
  const activeSort: SortId = isSort(sortParam) ? sortParam : "featured";

  const updateQuery = useCallback(
    (next: { category?: CategoryId | null; sort?: SortId }) => {
      const params = new URLSearchParams(searchParams.toString());
      if (next.category !== undefined) {
        if (next.category) params.set("category", next.category);
        else params.delete("category");
      }
      if (next.sort !== undefined) {
        if (next.sort === "featured") params.delete("sort");
        else params.set("sort", next.sort);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const visibleProducts = useMemo(() => {
    const filtered = activeCategory
      ? products.filter((product) => product.category === activeCategory)
      : [...products];

    switch (activeSort) {
      case "price-asc":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-desc":
        return filtered.sort((a, b) => b.price - a.price);
      case "name":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case "new":
        return filtered.sort(
          (a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)),
        );
      default:
        return filtered.sort(
          (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        );
    }
  }, [activeCategory, activeSort]);

  const activeLabel = activeCategory
    ? categories.find((category) => category.id === activeCategory)?.label
    : null;

  return (
    <div>
      <div className="sticky top-16 z-30 border-y border-ink/10 bg-paper md:top-20">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-5 py-3 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="-mx-1 overflow-x-auto no-scrollbar">
            <div
              role="group"
              aria-label="Filter by collection"
              className="flex items-center gap-1 px-1"
            >
              <button
                type="button"
                onClick={() => updateQuery({ category: null })}
                aria-pressed={activeCategory === null}
                className={cn(
                  "h-9 shrink-0 px-3 text-label transition-colors duration-200",
                  activeCategory === null
                    ? "bg-ink text-paper"
                    : "text-ink/65 hover:text-ink",
                )}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => updateQuery({ category: category.id })}
                  aria-pressed={activeCategory === category.id}
                  className={cn(
                    "h-9 shrink-0 px-3 text-label transition-colors duration-200",
                    activeCategory === category.id
                      ? "bg-ink text-paper"
                      : "text-ink/65 hover:text-ink",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 md:justify-end">
            <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-ink/60" aria-live="polite">
              {visibleProducts.length} {visibleProducts.length === 1 ? "piece" : "pieces"}
              {activeLabel ? ` · ${activeLabel}` : ""}
            </p>
            <div className="flex min-w-0 items-center gap-2">
              <label
                htmlFor="sort"
                className="hidden text-[0.6875rem] uppercase tracking-[0.18em] text-ink/60 sm:block"
              >
                Sort
              </label>
              <div className="relative min-w-0">
                <select
                id="sort"
                aria-label="Sort pieces"
                value={activeSort}
                onChange={(event) =>
                  updateQuery({ sort: event.target.value as SortId })
                }
                  className="h-9 w-full min-w-0 max-w-[11.5rem] cursor-pointer appearance-none border border-ink/20 bg-paper py-0 pl-3 pr-9 text-sm text-ink transition-colors hover:border-ink/50"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-ink/65"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        {visibleProducts.length > 0 ? (
          <ProductGrid products={visibleProducts} preloadCount={4} />
        ) : (
          <div className="flex flex-col items-start gap-5 border border-ink/10 bg-bone px-6 py-16 sm:items-center sm:text-center">
            <SearchX className="size-6 text-ink/60" strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="text-display text-2xl">Nothing in this collection yet</p>
              <p className="mt-2 text-sm text-ink/65">
                The sample catalogue has no pieces in this category.
              </p>
            </div>
            <Button type="button" variant="outline" onClick={() => updateQuery({ category: null, sort: "featured" })}>
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
