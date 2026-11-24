/**
 * Deployment configuration.
 *
 * `NEXT_PUBLIC_SITE_URL` sets the absolute base for canonical URLs, Open Graph tags and the
 * sitemap. Until the brand owner confirms a domain, it falls back to the local preview origin.
 *
 * Indexing stays off for the concept: this is an unofficial study and must not compete with
 * the brand's own site in search results. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` only after the
 * owner approves a production launch — see docs/DEPLOYMENT-GUIDE.md.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Baba Clothing concept preview — Your style, Your identity.",
};

/**
 * Builds route metadata with a canonical URL and matching Open Graph/Twitter data.
 * Next replaces a parent `openGraph` object wholesale when a route defines its own, so
 * every field has to be restated here rather than inherited from the layout.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const socialTitle = title.includes(" — ") ? title : `${title} · Baba Clothing`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      siteName: "Baba Clothing — concept preview",
      title: socialTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
