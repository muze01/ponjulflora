/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:      "#FAF6EF",
        terracotta: "#C4622D",
        rust:       "#8B3A1A",
        gold:       "#C9A84C",
        "gold-light": "#E8C97A",
        forest:     "#1B4D3E",
        "brown-dark": "#2C1810",
        "warm-brown": "#6B3A2A",
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        script:  ["var(--font-cormorant)"],
        body:    ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
