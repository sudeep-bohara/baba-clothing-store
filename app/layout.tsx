import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import { BagProvider } from "@/components/bag-provider";
import { BagDrawer } from "@/components/bag-drawer";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import { allowIndexing, ogImage, siteUrl } from "@/lib/seo";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.slogan}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${site.name} — concept preview`,
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    images: [ogImage.url],
  },
  // Unofficial concept study: stays out of search results until the owner approves
  // a production launch. Flip with NEXT_PUBLIC_ALLOW_INDEXING — see docs/DEPLOYMENT-GUIDE.md.
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="top" className={`${sans.variable} ${display.variable}`}>
      <body className="flex min-h-dvh flex-col bg-paper text-ink">
        <BagProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-label focus:text-paper"
          >
            Skip to content
          </a>

          <aside aria-label="Concept notice" className="bg-ink text-paper">
            <p className="mx-auto max-w-[1600px] px-5 py-2 text-center text-[0.625rem] leading-relaxed tracking-[0.14em] uppercase text-paper/70 sm:px-8">
              Concept preview · Sample catalogue &amp; illustrative prices · No checkout
            </p>
          </aside>

          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <BagDrawer />
        </BagProvider>
      </body>
    </html>
  );
}
