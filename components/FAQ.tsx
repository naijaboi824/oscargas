"use client";
import { useState } from "react";

const faqs = [
  {
    q: "When will my gas be delivered?",
    a: "We offer delivery within 24 hours, and same-day delivery for orders placed before 12 PM. For the most accurate delivery time, please refer to the estimated schedule provided at checkout — or just WhatsApp us and we'll confirm straight away.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash on delivery, bank transfers (EFT), and all major credit and debit cards. You can choose your preferred method at checkout or let the driver know when they arrive.",
  },
  {
    q: "How do I choose the right gas cylinder size?",
    a: "Consider how much gas you use. A 5kg cylinder is great for braais or camping. A 9kg is perfect for everyday household cooking. A 14kg adds extra capacity for busier kitchens or more appliances. A 19kg suits larger families or combo appliances (stove + oven). A 48kg is best for businesses, restaurants, or very heavy residential use.",
  },
  {
    q: "Are your gas cylinders certified and legal?",
    a: "Yes. All our gas cylinders are certified and regularly tested to meet all SANS safety and legal standards. We ensure every tank is inspected and compliant before delivery.",
  },
  {
    q: "Do you do cylinder exchange or only refills?",
    a: "We offer both! You can exchange your empty cylinder for a pre-filled one (fastest option), or arrange for a refill on the spot. Both options are available — just let us know when ordering.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We primarily serve Gordon's Bay, Somerset West, Strand, Heldervue and surrounding Helderberg areas. Contact us to confirm if we cover your area — we aim to expand our delivery zones regularly.",
  },
  {
    q: "Do you install gas appliances and gas lines?",
    a: "Yes. We offer professional, certified installation of gas lines, regulators, stoves, heaters and other LP gas equipment. All installations comply with SANS standards and come with a certificate of compliance on request.",
  },
  {
    q: "Can I track my delivery?",
    a: "You can contact us via WhatsApp at any time for a live update on your order. We'll keep you in the loop from dispatch to arrival.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[var(--charcoal)] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="display text-[var(--flame)] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Got Questions?
          </p>
          <h2
            className="display font-bold uppercase leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Frequently <span className="text-[var(--flame)]">Asked</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-l-2 transition-colors duration-300 ${
                open === i ? "border-[var(--flame)]" : "border-transparent"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between gap-4 bg-[var(--ash)] hover:bg-[var(--smoke)] transition-colors duration-200 px-6 py-5 group"
              >
                <span
                  className="display font-semibold uppercase tracking-wide text-sm md:text-base leading-snug text-left"
                >
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? "border-[var(--flame)] bg-[var(--flame)] text-white rotate-45"
                      : "border-white/20 text-[var(--steel)] group-hover:border-[var(--flame)]/40"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="1" x2="5" y2="9" />
                    <line x1="1" y1="5" x2="9" y2="5" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[var(--ash)] px-6 pb-6 pt-1 border-t border-white/5">
                  <p className="text-[var(--mist)] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-[var(--steel)] text-sm mb-4">Still have a question we haven't answered?</p>
          <a
            href="https://wa.me/27787437120"
            target="_blank"
            rel="noopener noreferrer"
            className="display inline-flex items-center gap-2 border border-[var(--flame)]/40 text-[var(--flame)] hover:bg-[var(--flame)] hover:text-white font-semibold text-sm tracking-widest uppercase px-8 py-3 transition-all duration-200"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
