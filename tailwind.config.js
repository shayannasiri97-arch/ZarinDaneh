/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3e0508",
          dark: "#2a0305",
          container: "#5b1a1a",
          gold: "#c89b3c",
          "gold-hover": "#b38728",
          "gold-container": "#fbf2dc",
        },
        secondary: {
          DEFAULT: "#7c5800",
          container: "#fdbf40",
          dim: "#fabc3e",
          fixed: "#ffdea8",
        },
        surface: {
          DEFAULT: "#fff8f5",
          bright: "#fcf9f5",
          dim: "#efd5c6",
          container: {
            lowest: "#ffffff",
            low: "#fff1ea",
            DEFAULT: "#ffeade",
            high: "#fee3d4",
            highest: "#f8ddcf",
          }
        },
        "on-surface": "#261910",
        "on-surface-variant": "#544341",
        "outline-color": "#877271",
        "outline-variant": "#dac1bf",
        "persian-saffron": "#93171a",
        "persian-pistachio": "#295034",
        "gold-deep": "#8a6616",
        error: "#ba1a1a",
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Vazirmatn', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
