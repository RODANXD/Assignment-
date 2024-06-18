// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        'bottom': 'var(--bottom)',
      },
      width: {
        '32rem': '36rem',
      },
      fontFamily:{
        ProtestRiot:["Protest Riot", "sans-serif"],
        bangers:["Bangers", "sans-serif"],
        Gentium:["Gentium Book Plus", "Bangers"]

      }
    },
  },
  plugins: [],
}

