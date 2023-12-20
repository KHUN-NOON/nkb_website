const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "wiggle": 'wiggle 1s ease-in-out infinite',
        "fade-in": "fade_in 2s",
        "zoom-in": "zoom_in 8s linear",
        "carousel-zoom-fade": "carousel_zoom_fade 10s linear"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        spin: {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" }
        },
        fade_in: {
          "from": { opacity: "0" },
          "to": { opacity: "1" }
        },
        zoom_in: {
          "from": { transform: "scale(1)" },
          "to": { transform: "scale(1.5)" },
        },
        carousel_zoom_fade: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.2)", opacity: "0.9" },
          "100%": { transform: "scale(1.5)", opacity: "1" }
        }
      }
    },
  },
  plugins: [],
}

