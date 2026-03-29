# Oscar Gas — Next.js Website

A production-ready Next.js 14 rebuild of oscargas.co.za, built with TypeScript, Tailwind CSS and the App Router.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
oscargas/
├── app/
│   ├── globals.css          # Design tokens, animations, utilities
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Home page
│   ├── shop/
│   │   └── page.tsx         # Full shop / products page
│   └── contact/
│       └── page.tsx         # Standalone contact page
├── components/
│   ├── Navbar.tsx           # Sticky responsive navbar
│   ├── Hero.tsx             # Hero section with animated headline
│   ├── Products.tsx         # 4 cylinder cards (5kg–48kg)
│   ├── Services.tsx         # 4 services grid
│   ├── WhyUs.tsx            # Stats + trust reasons
│   ├── Testimonials.tsx     # Real customer reviews
│   ├── FAQ.tsx              # Accordion FAQ (8 questions)
│   ├── ContactSection.tsx   # Contact form + details
│   ├── Footer.tsx           # Full footer
│   └── WhatsAppButton.tsx   # Floating WhatsApp CTA
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--flame` | `#E8420A` — primary brand orange-red |
| `--flame-light` | `#FF6B35` — hover / accent |
| `--flame-dark` | `#BF3208` — pressed state |
| `--black` | `#0D0D0D` — page background |
| `--charcoal` | `#161616` — section alternate |
| `--ash` | `#1F1F1F` — card backgrounds |
| Display font | **Oswald** (headings, labels, buttons) |
| Body font | **DM Sans** (paragraphs, descriptions) |

---

## 📞 Contact Details (pre-filled in all components)

| Field | Value |
|-------|-------|
| Phone | 067 220 6539 |
| WhatsApp | 078 743 7120 |
| Email | service@oscargas.co.za |
| Address | Unit 8, 16 Industrial Road, Gordon's Bay, 7140 |

---

## ✅ Features

- **Fully responsive** — mobile, tablet, desktop
- **App Router** with TypeScript
- **Google Fonts** via `next/font` (zero layout shift)
- **WhatsApp integration** — contact form opens WhatsApp with pre-filled message
- **Floating WhatsApp button** on all pages
- **SEO ready** — metadata, OpenGraph tags, semantic HTML
- **Accessible** — aria labels, semantic nav, focus states
- **Animated hero** — staggered fade-up on load
- **Accordion FAQ** — fully interactive
- **Interactive product cards** — expand on click to show use cases
- **No external UI libraries** — pure Tailwind + custom CSS

---

## 🔧 Customisation Tips

### Update prices
Edit the `products` array in `components/Products.tsx` and `app/shop/page.tsx`.

### Add/remove testimonials
Edit the `testimonials` array in `components/Testimonials.tsx`.

### Change WhatsApp number
Search for `27787437120` across all files and replace with your number (no spaces or +).

### Add Google Maps embed
In `components/ContactSection.tsx`, add an `<iframe>` embed below the contact cards.

### Deploy to Vercel
```bash
npx vercel
```
Connect your GitHub repo for automatic deploys on push.

---

## 📦 Dependencies

- `next` 14.x
- `react` 18.x
- `tailwindcss` 3.x
- `typescript` 5.x

No other dependencies required.
