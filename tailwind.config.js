/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarygreen: "#f60",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        interLight: "Inter-light, sans-serif",
      }
    },
  },
  plugins: [],
}

