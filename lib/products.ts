/**
 * Sample catalogue.
 *
 * Everything in this module is demonstration content: names, prices, sizes and
 * colourways are illustrative and do not represent Baba Clothing stock, pricing
 * or availability. Replace this data with the owner's real catalogue before the
 * concept is used commercially.
 */

export type CategoryId =
  | "outerwear"
  | "tailoring"
  | "denim"
  | "essentials"
  | "accessories";

export type Category = {
  id: CategoryId;
  label: string;
  blurb: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  focal?: string;
};

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  price: number;
  summary: string;
  details: string[];
  images: ProductImage[];
  sizes?: string[];
  colors?: ProductColor[];
  isNew?: boolean;
  featured?: boolean;
};

export const categories: Category[] = [
  { id: "outerwear", label: "Outerwear", blurb: "Coats and layers" },
  { id: "tailoring", label: "Tailoring", blurb: "Suiting and sets" },
  { id: "denim", label: "Denim", blurb: "Denim, cut clean" },
  { id: "essentials", label: "Essentials", blurb: "Everyday foundations" },
  { id: "accessories", label: "Accessories", blurb: "Finishing pieces" },
];

const black = { name: "Black", hex: "#111111" };
const bone = { name: "Bone", hex: "#E8E3DA" };
const charcoal = { name: "Charcoal", hex: "#3A3A3A" };

export const products: Product[] = [
  {
    slug: "ivory-tailored-set",
    name: "Ivory Tailored Set",
    category: "tailoring",
    price: 22000,
    summary:
      "A soft-shouldered shirt and trouser set cut from the same cloth, so the line stays unbroken from shoulder to hem.",
    details: [
      "Relaxed shirt with a concealed placket",
      "Straight-leg trouser with a pressed crease",
      "Sample colourway: ivory",
    ],
    images: [
      {
        src: "/images/products/ivory-tailored-set-1.jpg",
        alt: "Black and white studio photograph of a model crouching in an ivory shirt and trousers",
        focal: "center 35%",
      },
      {
        src: "/images/products/ivory-tailored-set-2.jpg",
        alt: "Black and white portrait of a model in a pale outfit beside a window",
        focal: "center 30%",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [bone, black],
    isNew: true,
    featured: true,
  },
  {
    slug: "longline-blazer",
    name: "Longline Blazer",
    category: "outerwear",
    price: 18500,
    summary:
      "A single-breasted blazer with a longer body and a quiet shoulder — the layer that holds a whole outfit together.",
    details: [
      "Single-breasted front, two-button closure",
      "Longer body with a straight hem",
      "Sample colourway: black",
    ],
    images: [
      {
        src: "/images/products/longline-blazer-1.jpg",
        alt: "Full-length black and white photograph of a model wearing a dark single-breasted blazer against a brick wall",
        focal: "center 25%",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [black, charcoal],
    isNew: true,
    featured: true,
  },
  {
    slug: "selvedge-straight-denim",
    name: "Selvedge Straight Denim",
    category: "denim",
    price: 9800,
    summary:
      "Straight through the leg with a firm hand and a clean hem. Built to fade slowly and stay in rotation.",
    details: [
      "Straight leg with a mid rise",
      "Five-pocket construction",
      "Sample wash: raw indigo",
    ],
    images: [
      {
        src: "/images/products/selvedge-denim-1.jpg",
        alt: "Close-up of the back pocket and stitching on a pair of jeans",
        focal: "center",
      },
      {
        src: "/images/products/selvedge-denim-2.jpg",
        alt: "Close-up of denim pocket detailing and topstitching",
        focal: "center",
      },
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [{ name: "Raw indigo", hex: "#3B4A5A" }],
    featured: true,
  },
  {
    slug: "heavyweight-cotton-tee",
    name: "Heavyweight Cotton Tee",
    category: "essentials",
    price: 3200,
    summary:
      "A dense jersey tee with a structured body and a collar that keeps its shape after a wash.",
    details: [
      "Boxy body with a dropped shoulder",
      "Ribbed neckline",
      "Sample colourway: white",
    ],
    images: [
      {
        src: "/images/products/oversized-tee-1.jpg",
        alt: "Black and white photograph of a model wearing a plain white t-shirt",
        focal: "center 30%",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "White", hex: "#F2F0EC" }, black],
    featured: true,
  },
  {
    slug: "merino-crew-knit",
    name: "Merino Crew Knit",
    category: "essentials",
    price: 8900,
    summary:
      "A fine-gauge crew neck with a clean neckline — light enough to layer, warm enough to wear alone.",
    details: [
      "Fine-gauge knit with a set-in sleeve",
      "Ribbed cuffs and hem",
      "Sample colourway: charcoal",
    ],
    images: [
      {
        src: "/images/products/monochrome-knit-1.jpg",
        alt: "Low-key black and white portrait of a model in a dark fine-gauge knit",
        focal: "center 30%",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [charcoal, black, bone],
    isNew: true,
  },
  {
    slug: "sleeveless-knit-shell",
    name: "Sleeveless Knit Shell",
    category: "essentials",
    price: 7400,
    summary:
      "A high-neck shell that sits close to the body and works under tailoring or on its own.",
    details: [
      "High neckline, sleeveless",
      "Close fit through the body",
      "Sample colourway: black",
    ],
    images: [
      {
        src: "/images/products/merino-shell-1.jpg",
        alt: "Black and white photograph of a model seated in a dark sleeveless top",
        focal: "center 30%",
      },
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [black],
    isNew: true,
  },
  {
    slug: "court-low-sneaker",
    name: "Court Low Sneaker",
    category: "accessories",
    price: 7200,
    summary:
      "A low court silhouette in smooth leather with a plain toe — the one shoe that reads with everything.",
    details: [
      "Low court profile",
      "Smooth upper with a plain toe cap",
      "Sample colourway: white",
    ],
    images: [
      {
        src: "/images/products/court-sneaker-1.jpg",
        alt: "Three pairs of white low-top court sneakers lined up on a wooden surface",
        focal: "center",
      },
      {
        src: "/images/products/court-sneaker-2.jpg",
        alt: "Overhead view of a pair of white canvas court sneakers",
        focal: "center",
      },
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: [{ name: "White", hex: "#F2F0EC" }],
  },
  {
    slug: "steel-watch",
    name: "Steel Watch",
    category: "accessories",
    price: 15500,
    summary:
      "A small steel case on a fine bracelet, sized to sit under a cuff without catching.",
    details: [
      "Steel case with a fine bracelet",
      "Plain dial, no numerals",
      "Sample colourway: steel",
    ],
    images: [
      {
        src: "/images/products/steel-watch-1.jpg",
        alt: "Close-up of a steel watch worn on the wrist beneath a suit cuff",
        focal: "center",
      },
    ],
    colors: [{ name: "Steel", hex: "#9A9A9A" }],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getCategory(id: CategoryId): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function relatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (candidate) =>
      candidate.slug !== product.slug && candidate.category === product.category,
  );
  const rest = products.filter(
    (candidate) =>
      candidate.slug !== product.slug && candidate.category !== product.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
