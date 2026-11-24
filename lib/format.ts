/** Demo pricing only — see the notice in the site header and product pages. */
export const CURRENCY_LABEL = "Rs";

const priceFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

export function formatPrice(value: number) {
  return `${CURRENCY_LABEL} ${priceFormatter.format(value)}`;
}
