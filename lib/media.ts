/**
 * Campaign and editorial imagery.
 *
 * Every frame is licensed demonstration photography, not Baba Clothing's own
 * campaigns. Swap a path here to replace a photograph — see docs/ASSETS.md for
 * the licence and source of each file in `public/images`.
 */

export type CampaignImage = {
  src: string;
  alt: string;
  focal?: string;
};

export const campaign = {
  hero: {
    src: "/images/campaign/hero.jpg",
    alt: "Black and white studio photograph of a model crouching in a pale shirt and trousers against a dark backdrop",
    focal: "center 35%",
  },
  lookbook: [
    {
      src: "/images/campaign/lookbook-01.jpg",
      alt: "Black and white portrait of a model in a dark roll-neck against a plain wall",
      focal: "center 30%",
    },
    {
      src: "/images/campaign/lookbook-02.jpg",
      alt: "Full-length black and white photograph of a model in a dark blazer and trousers standing against a brick wall",
      focal: "center 30%",
    },
    {
      src: "/images/campaign/lookbook-03.jpg",
      alt: "Black and white studio portrait of a model in a dark top against a tiled wall",
      focal: "center 25%",
    },
  ] satisfies CampaignImage[],
  editorial: [
    {
      src: "/images/campaign/editorial-01.jpg",
      alt: "Black and white portrait of a model in a lace top beside a window",
      focal: "center 30%",
    },
    {
      src: "/images/campaign/editorial-02.jpg",
      alt: "Low-key black and white portrait of a model in a roll-neck",
      focal: "center 30%",
    },
    {
      src: "/images/campaign/editorial-03.jpg",
      alt: "Black and white portrait of a model turning towards the light",
      focal: "center 25%",
    },
  ] satisfies CampaignImage[],
  craft: {
    src: "/images/campaign/craft-01.jpg",
    alt: "Hands working a piece of cloth on a workbench",
    focal: "center",
  },
  store: {
    src: "/images/campaign/store-01.jpg",
    alt: "Garments on rails inside a bright, minimal retail interior",
    focal: "center",
  },
  /** Instagram-style frames: product still life, rail detail, shop floor. */
  socialFeed: [
    {
      src: "/images/products/court-sneaker-1.jpg",
      alt: "Three pairs of white low-top court sneakers lined up on a wooden surface",
      focal: "center",
    },
    {
      src: "/images/campaign/portrait-02.jpg",
      alt: "Monochrome detail of garments hanging on a wooden rail",
      focal: "center",
    },
    {
      src: "/images/campaign/store-01.jpg",
      alt: "Monochrome view of a boutique rail, mirror and pendant lights",
      focal: "center",
    },
  ] satisfies CampaignImage[],
  collections: {
    tailoring: {
      src: "/images/collections/tailoring.jpg",
      alt: "Full-length black and white photograph of a model in tailored outerwear",
      focal: "center 30%",
    },
    denim: {
      src: "/images/collections/denim.jpg",
      alt: "Close-up of a denim back pocket and its stitching",
      focal: "center",
    },
    essentials: {
      src: "/images/collections/essentials.jpg",
      alt: "Model wearing a plain white t-shirt against a dark background",
      focal: "center 30%",
    },
    accessories: {
      src: "/images/products/steel-watch-1.jpg",
      alt: "Close-up of a steel watch worn on a model's wrist",
      focal: "center",
    },
  },
} as const;
