/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "481px",
        mm: "780px",
      },
      padding: {
        "1/10": "10%",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundSize: {
        full: "100%",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(50%)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(50%)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        "fade-1": "fade 1s ease forwards",
        "fade-3": "fade 3s ease forwards",
        "fade-left": "fadeLeft 0.5s ease-in forwards",
        "fade-right": "fadeRight 0.5s ease-in forwards",
        "fade-up": "fadeUp 0.5s ease-in forwards",
      },
      translate: {
        reverse: "-100%",
        "reverse-1/2": "-50%",
      },
    },
  },
  plugins: [],
}
