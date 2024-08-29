import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 8px rgba(255,255, 255, 0.45)",
          "0 0px 10px rgba(255, 255,255, 0.3)"
        ],
        purpleGlow: [
          "0 0px 5px rgba(220, 190, 265, 0.3)",
          "0 0px 5px rgba(240, 210, 265, 0.3)"
        ],
        boxShadow: {
          'border-glow': '0 0 1000px rgba(255, 255, 255, 1)', // Custom blue glow
        },
      }
    },
  },
  plugins: [
    daisyui,
  ],
}