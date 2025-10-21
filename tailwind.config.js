module.exports = {
  theme: {
    extend: {
      fontFamily: {
        Driftwood: ['"Driftwood"', "sans-serif"],
        serif: ['"DM Serif Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
