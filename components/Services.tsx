"use client";

const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M12 28 L20 10 L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 22 H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="10" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: "Gas Refills & Exchange",
    desc: "Need gas? Swap your empty tank for a full one, or get it refilled on the spot. Quick, easy and reliable.",
    cta: "Refill Now",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <rect x="11" y="14" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15 14 V11 Q20 8 25 11 V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="21" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 24 V27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Installations",
    desc: "Safe and professional installation of all LP gas equipment. We handle gas lines and appliance setups with full certification.",
    cta: "Book Install",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path d="M14 20 C14 16.5 17 14 20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 20 C26 23.5 23 26 20 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 11 L20 14 M20 26 L20 29 M11 20 L14 20 M26 20 L29 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Maintenance & Repair",
    desc: "Routine checks, leak detection and fixes, and repairs to keep your gas system running safely and efficiently.",
    cta: "Get a Check",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <rect x="10" y="22" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <rect x="22" y="22" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <rect x="16" y="12" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 20 V22 M14 22 L18 20 M26 22 L22 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Appliances & Supplies",
    desc: "Shop our range of high-quality gas stoves, heaters, regulators, hoses, and all other essential gas supplies.",
    cta: "Shop Supplies",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--black)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="display text-[var(--flame)] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h2
            className="display font-bold uppercase leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Our <span className="text-[var(--flame)]">Services</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {services.map((s, i) => (
            <div
              key={i}
              className="card-sweep relative bg-[var(--black)] p-10 group hover:bg-[var(--charcoal)] transition-colors duration-300 overflow-hidden"
            >
              {/* Number watermark */}
              <span
                className="absolute top-2 right-6 display font-bold text-[7rem] leading-none text-white/[0.025] select-none group-hover:text-[var(--flame)]/5 transition-colors duration-300"
              >
                0{i + 1}
              </span>

              <div className="relative z-10">
                <div className="text-[var(--flame)] mb-5">{s.icon}</div>
                <h3
                  className="display font-bold uppercase tracking-wide text-2xl mb-3 leading-tight"
                >
                  {s.title}
                </h3>
                <p className="text-[var(--steel)] text-sm leading-relaxed mb-6 max-w-sm">
                  {s.desc}
                </p>
                <a
                  href="https://wa.me/27787437120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[var(--flame)] hover:text-white transition-colors duration-200 group/link"
                >
                  {s.cta}
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-1"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 6h10M7 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
