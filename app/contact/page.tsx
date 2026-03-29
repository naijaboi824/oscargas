import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Us | Oscar Gas",
  description: "Get in touch with Oscar Gas for LP gas deliveries, installations and enquiries. Call 067 220 6539 or WhatsApp 078 743 7120.",
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--black)] text-[var(--white)] min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
