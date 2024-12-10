/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "80%": { transform: "translateY(-10px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slideUp 0.8s ease-in-out forwards",
      },
      screens: {
        'md' : '880px',
      }
    },
  },
  plugins: [],
}