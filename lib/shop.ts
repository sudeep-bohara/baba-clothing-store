import { categories, products, type CategoryId, type Product } from "@/lib/products";

export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "new", label: "Newest" },
  { id: "price-asc", label: "Price — low to high" },
  { id: "price-desc", label: "Price — high to low" },
  { id: "name", label: "Name — A to Z" },
] as const;

export type SortId = (typeof sortOptions)[number]["id"];

export const defaultSort: SortId = "featured";

type QueryValue = string | string[] | undefined;

function firstValue(value: QueryValue) {
  return Array.isArray(value) ? value[0] : value;
}

export function parseCategory(value: QueryValue): CategoryId | null {
  const raw = firstValue(value);
  return categories.some((category) => category.id === raw) ? (raw as CategoryId) : null;
}

export function parseSort(value: QueryValue): SortId {
  const raw = firstValue(value);
  return sortOptions.some((option) => option.id === raw) ? (raw as SortId) : defaultSort;
}

/** Canonical shop URL for a filter state, so the filter links and sort control stay in sync. */
export function shopHref(category: CategoryId | null, sort: SortId) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (sort !== defaultSort) params.set("sort", sort);
  const query = params.toString();
  return query ? `/shop?${query}` : "/shop";
}

export function browseProducts(category: CategoryId | null, sort: SortId): Product[] {
  const filtered = category
    ? products.filter((product) => product.category === category)
    : [...products];

  switch (sort) {
    case "price-asc":
      return filtered.sort((a, b) => a.price - b.price);
    case "price-desc":
      return filtered.sort((a, b) => b.price - a.price);
    case "name":
      return filtered.sort((a, b) => a.name.localeCompare(b.name));
    case "new":
      return filtered.sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
    default:
      return filtered.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }
}
