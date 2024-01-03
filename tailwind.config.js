/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js, ts, tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "myCol": "repeat(auto-fit, minmax(400px, 1fr))",
      },
      colors: {
        primarygreen: "#22c55e",
        primaryblack: "#1e293b",
        footerBg: "#0f172a",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        interLight: "Inter-light, sans-serif",
      },
      animate: {
      }
    },
  },
  plugins: [],
}

