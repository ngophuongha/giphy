const path = require("path");

module.export = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "giphy.bundle.js",
  },
  mode: "production",
};
