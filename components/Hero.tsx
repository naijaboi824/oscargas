"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".hero-item");
    items?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, i * 130);
    });
  }, []);

  return (
    <section
      ref={ref}
      className="hero-bg grid-overlay relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Glow orb */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[var(--flame)]/12 blur-[130px] pointer-events-none" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-[1px] h-[60vh] bg-gradient-to-b from-[var(--flame)]/40 via-[var(--flame)]/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Headline */}
        <h1
          className="hero-item display font-bold uppercase leading-[0.92] tracking-tight mb-6"
          style={{
            fontSize: "clamp(3.2rem, 11vw, 8.5rem)",
            opacity: 0,
            transform: "translateY(24px)",
            transition: "all 0.65s ease",
          }}
        >
          Same Day
          <br />
          <span className="text-[var(--flame)] flame-glow animate-flicker">LP Gas</span>
          <br />
          <span className="text-[var(--mist)]">Delivery</span>
        </h1>

        <p
          className="hero-item text-[var(--mist)] text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed font-light"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.65s ease" }}
        >
          Your one-stop shop for all things LP gas in Cape Town. Delivered to your doorstep — same day for orders before 12&nbsp;PM.
        </p>

        {/* CTAs */}
        <div
          className="hero-item flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.65s ease" }}
        >
          <Link
            href="#products"
            className="display bg-[var(--flame)] hover:bg-[var(--flame-dark)] text-white font-semibold text-base tracking-widest uppercase px-10 py-4 transition-all duration-200 animate-pulse-glow w-full sm:w-auto text-center"
          >
            Shop Gas Cylinders
          </Link>
          <a
            href="https://wa.me/27787437120"
            target="_blank"
            rel="noopener noreferrer"
            className="display border border-white/20 hover:border-[var(--flame)]/50 hover:text-[var(--flame)] text-white font-semibold text-base tracking-widest uppercase px-10 py-4 transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.47 14.38c-.3-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34z" />
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.05-1.33A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.72 0-3.33-.47-4.71-1.29l-.34-.2-3 .79.8-2.92-.22-.36A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Trust strip */}
        <div
          className="hero-item flex flex-wrap justify-center gap-6 md:gap-10"
          style={{ opacity: 0, transform: "translateY(18px)", transition: "all 0.65s ease" }}
        >
          {[
            { icon: "⚡", label: "Same-Day Delivery" },
            { icon: "🔒", label: "Certified & Safe" },
            { icon: "💳", label: "Cash · Card · EFT" },
            { icon: "🕐", label: "Open 24 Hours" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-[var(--steel)]">
              <span className="text-base">{icon}</span>
              <span className="display text-xs tracking-widest uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--smoke)] animate-bounce">
        <span className="display text-[10px] tracking-widest uppercase">Scroll</span>
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="5" y1="0" x2="5" y2="10" />
          <polyline points="1,7 5,11 9,7" />
        </svg>
      </div>
    </section>
  );
}
