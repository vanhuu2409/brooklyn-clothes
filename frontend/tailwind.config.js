/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A8715A",
        secondary: "#DD8560",
        "black-1": "#000",
        "black-2": "#333",
        "black-3": "#555",
        "black-4": "#888",
        line: "#E0CFBA",
        "input-bg": "#D9DBE9",
        "el-bg": "#F8F0E7",
        "off-white": "#FCFCFC",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("@tailwindcss/forms")],
};
