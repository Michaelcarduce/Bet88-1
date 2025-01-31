const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Other configurations...
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Ensure this path is correct
      filename: "index.html",
    }),
  ],
};
