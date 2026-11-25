export const site = {
  name: "Baba Clothing",
  wordmark: ["BABA", "CLOTHING"],
  slogan: "Your style, Your identity.",
  description:
    "A concept storefront for Baba Clothing — an editorial, monochrome fashion retail experience. Demonstration content only.",
  instagram: {
    handle: "@babaclothing.np",
    url: "https://www.instagram.com/babaclothing.np/",
  },
} as const;

export const primaryNav = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Shopping bag", href: "/bag" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Secondary links live in the footer only, so the header stays uncluttered. */
export const footerSecondaryNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

/**
 * Contact details that the brand owner has not confirmed yet.
 * Rendered as explicit placeholders — never as invented business facts.
 */
export const contactPlaceholders = [
  { label: "Studio address", status: "To confirm" },
  { label: "Email", status: "Not published" },
  { label: "Phone / WhatsApp", status: "Not published" },
  { label: "Opening hours", status: "Not published" },
  { label: "Service area", status: "Not published" },
] as const;
