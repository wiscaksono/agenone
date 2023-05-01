/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      fontSize: {
        "display-lg": [
          "72px",
          {
            letterSpacing: "-0.02em",
            lineHeight: "65px",
          },
        ],
        "display-sm": [
          "48px",
          {
            letterSpacing: "-0.02em",
            lineHeight: "52px",
          },
        ],
        "6xl": [
          "44px",
          {
            letterSpacing: "-0.02em",
            lineHeight: "52px",
          },
        ],
        "5xl": ["36px", "44px"],
        "4xl": ["32px", "40px"],
        "3xl": ["28px", "36px"],
        "2xl": ["24px", "32px"],
        xl: ["20px", "28px"],
        lg: ["18px", "28px"],
        md: ["16px", "24px"],
        sm: ["14px", "20px"],
        xs: ["12px", "18px"],
      },
      colors: {
        gray: {
          50: "#F3F3F3",
          100: "#CECFD2",
          200: "#B6B8BC",
          300: "#9EA0A5",
          400: "#86888F",
          500: "#6D7079",
          600: "#555962",
          700: "#3D414C",
          800: "#181D2A",
          900: "#0C111F",
        },
      },
      boxShadow: {
        xs: "0px 1px 2px rgba(25, 17, 39, 0.05)",
        sm: "0px 1px 2px rgba(25, 17, 39, 0.06), 0px 1px 3px rgba(25, 17, 39, 0.06)",
        md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -6px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};
