"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products, type Product } from "@/lib/products";

const STORAGE_KEY = "baba-bag-v1";
const MAX_QTY = 9;

export type BagLine = {
  slug: string;
  size?: string;
  color?: string;
  qty: number;
};

export type BagEntry = BagLine & {
  key: string;
  product: Product;
  lineTotal: number;
};

type BagContextValue = {
  entries: BagEntry[];
  count: number;
  subtotal: number;
  hydrated: boolean;
  isOpen: boolean;
  addItem: (
    product: Product,
    options?: { size?: string; color?: string; qty?: number },
  ) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  openBag: () => void;
  closeBag: () => void;
};

const BagContext = createContext<BagContextValue | null>(null);

function lineKey(line: BagLine) {
  return [line.slug, line.size ?? "", line.color ?? ""].join("|");
}

function clampQty(qty: number) {
  if (!Number.isFinite(qty)) return 1;
  return Math.min(MAX_QTY, Math.max(1, Math.round(qty)));
}

function readStoredLines(): BagLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((item): BagLine[] => {
      if (typeof item !== "object" || item === null) return [];
      const candidate = item as Partial<BagLine>;
      if (typeof candidate.slug !== "string") return [];
      if (!products.some((product) => product.slug === candidate.slug)) return [];
      return [
        {
          slug: candidate.slug,
          size: typeof candidate.size === "string" ? candidate.size : undefined,
          color: typeof candidate.color === "string" ? candidate.color : undefined,
          qty: clampQty(Number(candidate.qty ?? 1)),
        },
      ];
    });
  } catch {
    return [];
  }
}

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<BagLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // The bag lives in localStorage, which is only readable on the client. Loading it
    // after mount keeps the server-rendered markup and the first client render identical.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLines(readStoredLines());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage can be unavailable in private modes — the bag still works in memory */
    }
  }, [lines, hydrated]);

  const addItem = useCallback<BagContextValue["addItem"]>((product, options) => {
    const next: BagLine = {
      slug: product.slug,
      size: options?.size,
      color: options?.color,
      qty: clampQty(options?.qty ?? 1),
    };
    setLines((current) => {
      const key = lineKey(next);
      const existing = current.find((line) => lineKey(line) === key);
      if (!existing) return [...current, next];
      return current.map((line) =>
        lineKey(line) === key
          ? { ...line, qty: clampQty(line.qty + next.qty) }
          : line,
      );
    });
  }, []);

  const setQty = useCallback<BagContextValue["setQty"]>((key, qty) => {
    setLines((current) =>
      current.map((line) =>
        lineKey(line) === key ? { ...line, qty: clampQty(qty) } : line,
      ),
    );
  }, []);

  const remove = useCallback<BagContextValue["remove"]>((key) => {
    setLines((current) => current.filter((line) => lineKey(line) !== key));
  }, []);

  const clear = useCallback(() => setLines([]), []);
  const openBag = useCallback(() => setIsOpen(true), []);
  const closeBag = useCallback(() => setIsOpen(false), []);

  const entries = useMemo<BagEntry[]>(
    () =>
      lines.flatMap((line) => {
        const product = products.find((item) => item.slug === line.slug);
        if (!product) return [];
        return [
          {
            ...line,
            key: lineKey(line),
            product,
            lineTotal: product.price * line.qty,
          },
        ];
      }),
    [lines],
  );

  const count = entries.reduce((total, entry) => total + entry.qty, 0);
  const subtotal = entries.reduce((total, entry) => total + entry.lineTotal, 0);

  const value = useMemo<BagContextValue>(
    () => ({
      entries,
      count,
      subtotal,
      hydrated,
      isOpen,
      addItem,
      setQty,
      remove,
      clear,
      openBag,
      closeBag,
    }),
    [
      entries,
      count,
      subtotal,
      hydrated,
      isOpen,
      addItem,
      setQty,
      remove,
      clear,
      openBag,
      closeBag,
    ],
  );

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error("useBag must be used inside a BagProvider");
  }
  return context;
}

export { MAX_QTY };
