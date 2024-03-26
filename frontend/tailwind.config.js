/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
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
  plugins: [
    require("tailwindcss-animated"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
