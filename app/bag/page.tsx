import type { Metadata } from "next";
import { BagView } from "@/components/bag-view";

export const metadata: Metadata = {
  title: "Shopping bag",
  description:
    "Review your sample bag. Demonstration only — no payment or order processing is connected.",
};

export default function BagPage() {
  return <BagView />;
}
