const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5F24',
        'secondary': '#3B3B3B',
        'white': '#FFFFFF'
      }
    },
  },
  plugins: [],
});
