"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { categories, type CategoryId } from "@/lib/products";
import { cn } from "@/lib/cn";
import { parseSort, shopHref, sortOptions, type SortId } from "@/lib/shop";

export function ShopToolbar({
  category,
  sort,
  count,
}: {
  category: CategoryId | null;
  sort: SortId;
  count: number;
}) {
  const router = useRouter();
  const activeLabel = category
    ? categories.find((option) => option.id === category)?.label
    : null;

  const filters: { id: CategoryId | null; label: string }[] = [
    { id: null, label: "All" },
    ...categories.map((option) => ({ id: option.id, label: option.label })),
  ];

  return (
    <div className="border-y border-ink/10 bg-paper md:sticky md:top-20 md:z-30">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-5 py-3 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <nav aria-label="Filter by collection" className="-mx-1 px-1">
          <ul className="grid grid-cols-2 gap-1 md:flex md:flex-wrap md:items-center">
            {filters.map((filter) => {
              const active = filter.id === category;
              return (
                <li key={filter.label}>
                  <Link
                    href={shopHref(filter.id, sort)}
                    scroll={false}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "flex h-9 items-center justify-center px-3 text-label transition-colors duration-200 md:justify-start",
                      active ? "bg-ink text-paper" : "text-ink/65 hover:text-ink",
                    )}
                  >
                    {filter.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 md:justify-end">
          <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-ink/60">
            {count} {count === 1 ? "piece" : "pieces"}
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
                value={sort}
                onChange={(event) =>
                  router.replace(shopHref(category, parseSort(event.target.value)), {
                    scroll: false,
                  })
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
  );
}
