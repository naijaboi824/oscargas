"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[var(--black)]/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo priority sizeClassName="w-36 h-auto" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="display text-sm tracking-widest uppercase text-[var(--steel)] hover:text-white transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0672206539"
            className="display text-sm tracking-widest text-[var(--flame)] hover:text-white transition-colors uppercase"
          >
            067 220 6539
          </a>
          <Link
            href="#products"
            className="display bg-[var(--flame)] hover:bg-[var(--flame-dark)] text-white text-sm font-semibold tracking-widest uppercase px-6 py-2.5 transition-all duration-200 animate-pulse-glow"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-[var(--charcoal)] border-t border-white/5`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-sm tracking-widest uppercase text-[var(--mist)] hover:text-white transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#products"
            onClick={() => setOpen(false)}
            className="display bg-[var(--flame)] text-white text-sm font-semibold tracking-widest uppercase px-6 py-3 text-center mt-2"
          >
            Order Now
          </Link>
          <a
            href="tel:0672206539"
            className="display text-sm text-center tracking-widest text-[var(--flame)] uppercase"
          >
            067 220 6539
          </a>
        </div>
      </div>
    </header>
  );
}
