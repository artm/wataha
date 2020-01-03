const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    host: "0.0.0.0",
    contentBase: "./dist"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}