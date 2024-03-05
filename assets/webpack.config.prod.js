const path = require("path");

module.exports = {
  // entry: './js/libs/htmx.js',
  // output: {
  //     'path': path.resolve(__dirname, '../', 'static/js'),
  //     'filename': 'htmx.js'
  // },
  // entry: './js/libs/alpine.js',
  // output: {
  //     'path': path.resolve(__dirname, '../', 'static/js'),
  //     'filename': 'alpine.js'
  // },
  // entry: './js/libs/preline.js',
  // output: {
  //     'path': path.resolve(__dirname, '../', 'static/js'),
  //     'filename': 'preline.js'
  // },
  entry: "./js/libs/twelements.js",
  output: {
    path: path.resolve(__dirname, "../", "static/js"),
    filename: "twelements.js",
  },
};
