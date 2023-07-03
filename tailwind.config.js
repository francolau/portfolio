module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1100px" },
      // => @media (max-width: 1023px) { ... }

      extra: { max: "950px" },

      md: { max: "800px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "439px" },
      // => @media (max-width: 439px) { ... }

      xxs: {max: "340px"}
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      firamono: ["Fira Mono", "monospace"],
      rubikmono: ["Rubik Mono One", "sans-serif"],
      daysone: ["Days One", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        saludo: "url('/src/images/Saludo.png')",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        csy: "#fd0",
        csm: "#011627",
        _b_body: "#2f3e46",
      },
    },
  },
  plugins: [],
};
