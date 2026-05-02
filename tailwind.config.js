/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.16 0.005 240)",
        foreground: "oklch(0.98 0 0)",

        primary: "oklch(0.88 0.22 130)",
        secondary: "oklch(0.26 0.008 240)",

        border: "oklch(0.3 0.008 240)",
        muted: "oklch(0.26 0.008 240)",

        lime: "oklch(0.9 0.24 130)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -10px oklch(0.9 0.24 130 / 0.5)",
      },
    },
  },
  plugins: [],
};