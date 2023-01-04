const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|text)-(red|orange|zinc|blue|green|yellow|purple|pink|stone|lime|fuchsia|cyan)-(100|400|500|600)/,
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
