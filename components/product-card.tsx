import Image from "next/image";
import Link from "next/link";
import { getCategory, type Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export function ProductCard({
  product,
  preload = false,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw",
}: {
  product: Product;
  preload?: boolean;
  sizes?: string;
}) {
  const category = getCategory(product.category);
  const image = product.images[0];

  return (
    <article className="group relative">
      <Link
        href={`/products/${product.slug}`}
        className="block focus-visible:outline-offset-4"
      >
        <div className="relative aspect-4/5 overflow-hidden bg-bone">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload={preload}
            sizes={sizes}
            style={{ objectPosition: image.focal }}
            className={cn(
              "photo object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.035]",
            )}
          />
          {product.isNew ? (
            <span className="absolute left-3 top-3 bg-paper/95 px-2 py-1 text-[0.5625rem] uppercase tracking-[0.18em] text-ink">
              New
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0">
            <h3 className="text-sm leading-snug">{product.name}</h3>
            <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.14em] text-ink/60">
              {category?.label}
            </p>
          </div>
          <p className="shrink-0 text-sm tabular-nums text-ink/70 sm:text-right">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}

export function ProductGrid({
  products,
  preloadCount = 0,
}: {
  products: Product[];
  preloadCount?: number;
}) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <li key={product.slug}>
          <ProductCard product={product} preload={index < preloadCount} />
        </li>
      ))}
    </ul>
  );
}
