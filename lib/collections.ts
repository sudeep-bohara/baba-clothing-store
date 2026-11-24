import { campaign } from "@/lib/media";
import { categories, products, type Category, type Product } from "@/lib/products";

export type Collection = {
  slug: Category["id"];
  label: string;
  blurb: string;
  summary: string;
  image: { src: string; alt: string; focal?: string };
  items: Product[];
};

const summaries: Record<Category["id"], string> = {
  outerwear:
    "Layers that sit over tailoring and knitwear without competing with them. Sample pieces only.",
  tailoring:
    "Sets cut from a single cloth so the line runs unbroken from shoulder to hem.",
  denim:
    "Straight legs, firm hands and clean hems. Faded slowly, kept in rotation.",
  essentials:
    "The foundation layer: dense jersey, fine-gauge knit and quiet necklines.",
  accessories:
    "Finishing pieces sized to stay out of the way — plain toe, plain dial.",
};

export const collections: Collection[] = categories.map((category) => ({
  slug: category.id,
  label: category.label,
  blurb: category.blurb,
  summary: summaries[category.id],
  image: campaign.collections[category.id],
  items: products.filter((product) => product.category === category.id),
}));

export function getCollection(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}
