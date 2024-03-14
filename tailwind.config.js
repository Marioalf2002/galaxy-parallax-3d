/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url(/logo.png)",
        fondo: "url(/fondo.jpg)",
        asteoride1: "url(/asteoride1.png)",
        asteroide2: "url(/asteroide2.png)",
        asteroide3: "url(/asteroide3.png)",
        fondosub: "url(/fondosub1.png)",
        planetasminiatura: "url(/planetasminiatura.png)",
        planeta4: "url(/planeta4.png)",
        planeta3: "url(/planeta3.png)",
        planeta2: "url(/planeta2.png)",
        planeta1: "url(/planeta1.png)",
      },
      colors: {
        "gray-border": "rgba(255, 255, 255, .4)",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
