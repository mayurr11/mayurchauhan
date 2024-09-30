/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        emoji: ["Noto Color Emoji", "Inter"]
      },
      animation: {
        'spin': 'l3 1s infinite linear',
      },
      keyframes: {
        l3: {
          'to': { transform: 'rotate(1turn)' },
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
