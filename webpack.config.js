const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
    assetModuleFilename: "[name][ext]", // изображение
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "src"), //сервер
    port: 5001,
    open: true,
    hot: true,
  },
  //loader--> for files  инструменты которое помогает webpacku разные типы файлы

  module: {
    //css
    rules: [
      //css
      { test: /\.css/, use: ["style-loader", "css-loader"] },

      //images
      { test: /\.(svg|ico|png|jpg|jpeg)$/, type: "asset/resource" },

      //babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Demo",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
