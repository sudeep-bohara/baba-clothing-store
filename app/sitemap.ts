import type { MetadataRoute } from "next";
import { collections } from "@/lib/collections";
import { products } from "@/lib/products";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/shop", "/collections", "/about", "/contact", "/bag", "/privacy", "/terms"];

  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...collections.map((collection) => ({
      url: `${siteUrl}/collections/${collection.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
