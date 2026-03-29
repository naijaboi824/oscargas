"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Opens WhatsApp with pre-filled message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Oscar Gas! My name is ${form.name}.\n\n${form.message}\n\nCall me on: ${form.phone}`
    );
    window.open(`https://wa.me/27787437120?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-[var(--black)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="display text-[var(--flame)] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2
            className="display font-bold uppercase leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Contact <span className="text-[var(--flame)]">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left – info */}
          <div className="space-y-8">
            {/* Contact cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
                  </svg>
                ),
                label: "Phone",
                value: "067 220 6539",
                href: "tel:0672206539",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.47 14.38c-.3-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.05-1.33A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.72 0-3.33-.47-4.71-1.29l-.34-.2-3 .79.8-2.92-.22-.36A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                ),
                label: "WhatsApp",
                value: "078 743 7120",
                href: "https://wa.me/27787437120",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                value: "service@oscargas.co.za",
                href: "mailto:service@oscargas.co.za",
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Address",
                value: "Unit 8, 16 Industrial Road, Gordon's Bay, 7140",
                href: "https://maps.google.com/?q=Unit+8+16+Industrial+Road+Gordons+Bay",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 group"
              >
                <div className="mt-0.5 w-10 h-10 rounded-sm border border-white/10 bg-[var(--charcoal)] flex items-center justify-center text-[var(--flame)] shrink-0 group-hover:bg-[var(--flame)] group-hover:text-white group-hover:border-[var(--flame)] transition-all duration-200">
                  {item.icon}
                </div>
                <div>
                  <div className="display text-[10px] tracking-[0.25em] uppercase text-[var(--steel)] mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm text-[var(--mist)] group-hover:text-white transition-colors">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Hours */}
            <div className="border border-white/6 bg-[var(--charcoal)] p-6 mt-8">
              <p className="display text-xs tracking-[0.25em] uppercase text-[var(--flame)] mb-4 font-semibold">
                Trading Hours
              </p>
              <div className="space-y-2">
                {[
                  { day: "Monday – Friday", hours: "08:00 – 17:00" },
                  { day: "Saturday", hours: "08:00 – 14:00" },
                  { day: "Sunday / Public Holidays", hours: "WhatsApp only" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm">
                    <span className="text-[var(--steel)]">{h.day}</span>
                    <span className="display font-semibold tracking-wider text-white text-xs uppercase">
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="border border-white/8 bg-[var(--charcoal)] p-8">
            <h3 className="display font-bold uppercase tracking-wide text-xl mb-6">
              Send Us a Message
            </h3>

            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="text-[var(--flame)] text-5xl mb-4">✓</div>
                <p className="display font-bold uppercase tracking-wide text-lg mb-2">Redirecting to WhatsApp</p>
                <p className="text-[var(--steel)] text-sm">We'll respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="display text-[10px] tracking-[0.25em] uppercase text-[var(--steel)] block mb-1.5">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Smith"
                    className="w-full bg-[var(--ash)] border border-white/8 focus:border-[var(--flame)]/50 focus:outline-none text-sm text-white placeholder-[var(--smoke)] px-4 py-3 transition-colors"
                  />
                </div>
                <div>
                  <label className="display text-[10px] tracking-[0.25em] uppercase text-[var(--steel)] block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 082 000 0000"
                    className="w-full bg-[var(--ash)] border border-white/8 focus:border-[var(--flame)]/50 focus:outline-none text-sm text-white placeholder-[var(--smoke)] px-4 py-3 transition-colors"
                  />
                </div>
                <div>
                  <label className="display text-[10px] tracking-[0.25em] uppercase text-[var(--steel)] block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="e.g. I need a 9kg gas cylinder delivered to Gordon's Bay..."
                    className="w-full bg-[var(--ash)] border border-white/8 focus:border-[var(--flame)]/50 focus:outline-none text-sm text-white placeholder-[var(--smoke)] px-4 py-3 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="display w-full bg-[var(--flame)] hover:bg-[var(--flame-dark)] text-white font-semibold text-sm tracking-widest uppercase py-4 transition-all duration-200 animate-pulse-glow mt-2"
                >
                  Send via WhatsApp →
                </button>
                <p className="text-[var(--steel)] text-xs text-center">
                  This opens WhatsApp with your message pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
