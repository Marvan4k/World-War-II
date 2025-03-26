module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        swamp: '#25A18E',
        dark: '#00161D',
      },
    },
  },
  important: true, // Убедитесь, что это включено
  plugins: [],
};
