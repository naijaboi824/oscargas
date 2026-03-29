import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ShopCatalog from "@/components/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop Gas Cylinders | Oscar Gas",
  description:
    "Buy 5kg, 9kg, 14kg, 19kg and 48kg LP gas cylinders online. Same-day delivery in Cape Town and the Helderberg.",
};

export default function ShopPage() {
  return (
    <main className="bg-[var(--black)] text-[var(--white)] min-h-screen">
      <Navbar />
      <Suspense fallback={<div className="pt-32 pb-24 px-6 text-[var(--steel)]">Loading shop...</div>}>
        <ShopCatalog />
      </Suspense>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
