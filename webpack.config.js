const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    host: "0.0.0.0",
    contentBase: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["aframe-super-hot-loader"]
      },
      {
        test: /\.html/,
        exclude: /(node_modules)/,
        use: ['aframe-super-hot-html-loader']
      }
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
  ],
};

