/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        "primary-light": "#86efac",
        "primary-dark": "#16a34a",
        "neutral-gray": "#f3f4f6",
        danger: "#ef4444",
        discount: "#6e2594",
      },
      fontFamily: {
        sans: ["TrebuchetMS", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};