/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f6f3",
        charcoal: "#1f1a17",
        taupe: "#b39a84",
        mist: "#e9e4dc",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 32px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        lgx: "12px",
      },
    },
  },
  plugins: [],
};