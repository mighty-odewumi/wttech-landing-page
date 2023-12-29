/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarygreen: "#22c55e",
        primaryblack: "#1e293b",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        interLight: "Inter-light, sans-serif",
      }
    },
  },
  plugins: [],
}
