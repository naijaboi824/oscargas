const testimonials = [
  {
    quote:
      "Got gas under an hour of ordering. Excellent service — didn't even need to leave the office.",
    name: "Greeff Properties Helderberg",
    role: "Business Client",
    stars: 5,
  },
  {
    quote:
      "The best service I have seen in ages. We couldn't find a time that worked for delivery tomorrow — so they came today instead! Quick and easy switched out 2 cylinders, paid by card. Done! SUPER IMPRESSED!",
    name: "Su Huggett",
    role: "Residential Client",
    stars: 5,
  },
  {
    quote:
      "I called Oscar Gas and they delivered super quick, fast and friendly. Really reliable and cost effective.",
    name: "DJ",
    role: "Verified Customer",
    stars: 5,
  },
  {
    quote:
      "Fast, friendly and honest service. He also refills Cadac cylinders — great to know!",
    name: "St",
    role: "Verified Customer",
    stars: 5,
  },
  {
    quote:
      "Best Gas & Refill company. Blown away by the honesty and professional service. Good prices and free delivery to surrounding areas. Well done Oscar & Team!",
    name: "Local Customer",
    role: "Verified Customer",
    stars: 5,
  },
  {
    quote:
      "Excellent in their service and they are always well stocked in all lines. Quick to respond on enquiries. Don't hesitate to give them a call — they will be at your doorstep in no time.",
    name: "Business Client",
    role: "Verified Customer",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--black)] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="display text-[var(--flame)] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Customer Reviews
          </p>
          <h2
            className="display font-bold uppercase leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            What Clients <span className="text-[var(--flame)]">Say</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-white/6 bg-[var(--charcoal)] p-7 hover:border-[var(--flame)]/25 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              {/* Quote mark */}
              <span
                className="absolute top-4 right-5 display font-bold text-[5rem] leading-none text-[var(--flame)]/8 select-none group-hover:text-[var(--flame)]/14 transition-colors"
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-[var(--flame)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--mist)] text-sm leading-relaxed mb-6 flex-1 relative z-10">
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="border-t border-white/6 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--flame)]/20 border border-[var(--flame)]/30 flex items-center justify-center shrink-0">
                  <span className="display text-[var(--flame)] text-xs font-bold">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="display text-xs font-semibold tracking-wide uppercase text-white leading-tight">
                    {t.name}
                  </div>
                  <div className="display text-[10px] tracking-widest uppercase text-[var(--steel)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-12 border border-[var(--flame)]/20 bg-[var(--flame)]/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="display font-bold uppercase text-xl tracking-wide mb-1">Happy with our service?</p>
            <p className="text-[var(--steel)] text-sm">Leave us a Google review — it helps other locals find us.</p>
          </div>
          <a
            href="https://g.page/r/oscargas/review"
            target="_blank"
            rel="noopener noreferrer"
            className="display bg-[var(--flame)] hover:bg-[var(--flame-dark)] text-white font-semibold text-sm tracking-widest uppercase px-8 py-3 transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
