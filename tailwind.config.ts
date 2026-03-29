import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        flame: {
          DEFAULT: "#E8420A",
          light: "#FF6B35",
          dark: "#BF3208",
        },
        gas: {
          black: "#0D0D0D",
          charcoal: "#161616",
          ash: "#1F1F1F",
          smoke: "#2C2C2C",
          steel: "#6B6B6B",
          mist: "#A0A0A0",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        flicker: "flicker 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.88" },
          "55%": { opacity: "0.95" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232,66,10,0.35)" },
          "50%": { boxShadow: "0 0 45px rgba(232,66,10,0.7), 0 0 70px rgba(232,66,10,0.2)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
