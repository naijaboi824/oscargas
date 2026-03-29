import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Gas Refills & Exchange",
  "Installations",
  "Maintenance & Repair",
  "Appliances & Supplies",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <Logo sizeClassName="w-44 h-auto" />
          </div>
          <p className="text-[var(--steel)] text-sm leading-relaxed mb-6 max-w-xs">
            Your one-stop shop for all things LP gas in Cape Town. Same-day delivery, certified cylinders, and professional installations.
          </p>
          {/* Social / WhatsApp */}
          <a
            href="https://wa.me/27787437120"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-semibold tracking-widest uppercase px-4 py-2.5 transition-all duration-200 display"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.47 14.38c-.3-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34z"/>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.05-1.33A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.72 0-3.33-.47-4.71-1.29l-.34-.2-3 .79.8-2.92-.22-.36A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="display text-xs font-semibold tracking-[0.3em] uppercase text-[var(--flame)] mb-5">
            Navigation
          </h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="display text-sm tracking-wider uppercase text-[var(--steel)] hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="display text-xs font-semibold tracking-[0.3em] uppercase text-[var(--flame)] mb-5">
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <span className="display text-sm tracking-wider uppercase text-[var(--steel)]">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="display text-xs font-semibold tracking-[0.3em] uppercase text-[var(--flame)] mb-5">
            Contact
          </h4>
          <address className="not-italic space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[var(--flame)] mt-0.5 shrink-0 text-xs">📍</span>
              <span className="text-[var(--steel)] text-sm leading-relaxed">
                Unit 8, 16 Industrial Road<br />Gordon's Bay, 7140
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--flame)] shrink-0 text-xs">📞</span>
              <a href="tel:0672206539" className="text-[var(--steel)] text-sm hover:text-white transition-colors">
                067 220 6539
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--flame)] shrink-0 text-xs">💬</span>
              <a href="https://wa.me/27787437120" target="_blank" rel="noopener noreferrer" className="text-[var(--steel)] text-sm hover:text-white transition-colors">
                078 743 7120
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--flame)] shrink-0 text-xs">✉️</span>
              <a href="mailto:service@oscargas.co.za" className="text-[var(--steel)] text-sm hover:text-white transition-colors">
                service@oscargas.co.za
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[var(--steel)] text-xs tracking-wide">
            © {new Date().getFullYear()} Oscar Gas (Pty) Ltd · Gordon's Bay, Western Cape, South Africa
          </p>
          <p className="text-[var(--smoke)] text-xs tracking-wide">
            LP Gas Delivery · Installations · Refills & Exchange
          </p>
        </div>
      </div>
    </footer>
  );
}
