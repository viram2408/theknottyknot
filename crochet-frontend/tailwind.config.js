/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#e11d48", // lets you use bg-brand / text-brand
          light: "#fce7f3",
          dark: "#9d174d",
        },
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
