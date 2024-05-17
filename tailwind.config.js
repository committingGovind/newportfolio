/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animation: {
          blob: "blob 7s infinite",
        },
        blob: {
          "0%": {
            transform: " translate(0px, 0px) scale(1.0)",
          },
          "33%": {
            transform: "translate(30px,- 30px) scale(1.1)",
          },
          "66%": {
            transform: "translate(20px, -20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.0)",
          },
        },
      },
    },
  },
  plugins: [],
};
