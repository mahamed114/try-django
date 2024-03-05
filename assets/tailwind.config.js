/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../templates/**/*.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#000000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin.cjs"),
    require("preline/plugin"),
  ],
  darkMode: "class",
};
