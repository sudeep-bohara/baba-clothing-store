import type { Metadata } from "next";
import { BagView } from "@/components/bag-view";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Shopping bag",
  description:
    "Review your sample bag. Demonstration only — no payment or order processing is connected.",
  path: "/bag",
});

export default function BagPage() {
  return <BagView />;
}
