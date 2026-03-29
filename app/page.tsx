import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
