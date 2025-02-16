module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo', 'sans-serif'],
      },
      colors: {
        primaryColor: "#2b433e",
        secondaryColor: "#171717",
        thirdColor: "#2b423e",
      },
    },
  },
  plugins: [],
};
