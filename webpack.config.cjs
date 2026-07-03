
 
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",

  entry: "./src/index.js",

output: {
  path: path.resolve(__dirname, "dist"),
  filename: "main.js",
  publicPath: "/restaurant_page_js/",
},

  plugins: [
   new HtmlWebpackPlugin({
  template: "./src/template.html",
  base: "/restaurant_page_js/",
    }),
  ],

  devServer: {
    static: "./dist",
    open: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};