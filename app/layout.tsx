import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Oscar Gas | LPG Delivery – Gordon's Bay & Cape Town",
  description:
    "Your one-stop shop for LP gas in Cape Town. Same-day delivery, gas refills, cylinder exchange, installations and more. Call 067 220 6539.",
  keywords:
    "LPG gas delivery Cape Town, gas cylinders Gordon's Bay, gas refills, LP gas, Oscar Gas",
  openGraph: {
    title: "Oscar Gas | LPG Delivery – Cape Town",
    description: "Same-day door-to-door LPG delivery across Cape Town & the Helderberg.",
    url: "https://oscargas.co.za",
    siteName: "Oscar Gas",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
