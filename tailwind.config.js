const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      green: "hsl(75, 94%, 57%)",
      white: "hsl(0, 0%, 100%)",
      gray: "hsl(0, 0%, 20%)",
      darkgray: "hsl(0, 0%, 12%)",
      offblack: "hsl(0, 0%, 8%)"
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}

