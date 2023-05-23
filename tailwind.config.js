const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/components/Accordion/Accordion.jsx"],
  theme: {
    extend: {},
    colors: {
      'black': '#000'
    },
    fontFamily: {
      inter: ["Inter"]
    },
  },
  plugins: [],
});
