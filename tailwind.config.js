module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: "#4628F1",
        "brand-100": "#DAD4FC",
        "brand-theMalaka": "#00BAC7",
        "main-dark": "#070514",
        "white-1": "#DFDBF6",
      },
      fontFamily: {
        "plus-jakarta": ["Plus Jakarta Sans"],
      },
      boxShadow: {
        "shadow-the-malaka": "0px 15px 30px 0px rgba(0, 186, 199, 0.3)",
      },
      backgroundIMage: {
        heroTheMalaka: "url('/src/assets/icon/theMalaka/HeroBg.svg')",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
