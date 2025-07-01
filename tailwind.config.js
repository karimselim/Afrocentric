/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1C",
        secondary: "#aaa6c3",
        tertiary: "#0A1F44",
        'secondary-white': '#EAEAEA',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'beige': '#E5CDA5',
        'golden': '#CFA76E',
        'blue': '#0A1F44',
        'gold': '#CFA76E ',

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg2.jpg')",
      },
    },
  },
  plugins: [],
};
