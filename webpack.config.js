const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "/dist"
  },
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {loader: "file-loader", options: {
            esModule: false, 
            name: '[name].[contenthash].[ext]',
       
          }},
          "vue-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: "/node_modules/",
        use: [
          //fallback to vue-style-loader in development
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { esModule: false, sourceMap: true },
          }, // 2. turns css into common js, like a big string of a style.
          {
            loader: "sass-loader", // 1. turns scss to css
            options: {
              additionalData: `@import "./src/styles/global.scss";`,
              sourceMap: true,
            },
          },
        ],
      },
      { test: /\.vue$/, loader: "vue-loader" },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Responsive Food App",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      //optional options - and very similiar to the same options in webpackOptions.output
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
