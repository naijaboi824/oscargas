const stats = [
  { value: "24hr", label: "Delivery Guarantee", sub: "Same day if ordered before 12 PM" },
  { value: "100%", label: "Certified Cylinders", sub: "All tanks tested & safety compliant" },
  { value: "3+", label: "Payment Methods", sub: "Cash, card & bank transfer" },
  { value: "7", label: "Days a Week", sub: "Including weekends & public holidays" },
];

const reasons = [
  {
    title: "Honest Pricing",
    desc: "No hidden fees. What you see is what you pay. We believe in straightforward, fair pricing for every customer.",
  },
  {
    title: "Fast & Reliable",
    desc: "We pride ourselves on showing up on time with the right product. When you need gas, we deliver.",
  },
  {
    title: "Safety First",
    desc: "Every cylinder is certified and inspected. Our installations meet all SANS safety standards. Your family's safety is non-negotiable.",
  },
  {
    title: "Local & Personal",
    desc: "We're a local Helderberg business. When you call, you speak to a real person — not a call centre.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[var(--charcoal)] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="display text-[var(--flame)] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Our Promise
          </p>
          <h2
            className="display font-bold uppercase leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Why Choose <span className="text-[var(--flame)]">Oscar Gas</span>
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-16">
          {stats.map((s) => (
            <div key={s.value} className="bg-[var(--charcoal)] p-8 text-center group hover:bg-[var(--ash)] transition-colors duration-300">
              <div
                className="display font-bold text-[var(--flame)] leading-none mb-1 animate-flicker"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                {s.value}
              </div>
              <div className="display text-sm font-semibold tracking-widest uppercase text-white mb-1">
                {s.label}
              </div>
              <div className="text-[var(--steel)] text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="border border-white/6 bg-[var(--ash)] p-8 hover:border-[var(--flame)]/25 transition-colors duration-300 group relative overflow-hidden"
            >
              {/* Flame accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-[var(--flame)] opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="pl-5">
                <h3 className="display font-bold uppercase tracking-wide text-xl mb-3">{r.title}</h3>
                <p className="text-[var(--steel)] text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
