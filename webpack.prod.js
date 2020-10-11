const path = require("path");
//Requiring common config i merge-webpack to be merged with prod config
const common = require("./webpack.common"); 
const { merge } = require("webpack-merge"); 

//Requiring plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 

//MERGING COMMON CONFIG AND THIS ENTIRE OBJECT 
module.exports = merge(common, {
  mode: "production",
  
  output: {
    //Hashed filenames for production - allows for cache busting 
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
//BABEL LOADER - TRANSPILING TO OLDER JS FOR PRODUCTION XXXXXXXXXXXXXXXXXXXXXXXX
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
//SASS RULES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      {
        test: /\.scss$/,
          exclude: "/node_modules/",
            use: [
             
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",// 2. turns css into common js, like a big string of a style.
                options: { esModule: false, sourceMap: true },
              }, 
              {
                loader: "sass-loader", // Turns scss to css
                options: {
                  //Allows for all Sass variables to be globaly available in every Vue SFC
                  additionalData: `@import "./src/styles/global.scss";`,
                  sourceMap: true,
                },
              },
            ],
            }
      
    ],
  },
//RULES FOR PLUGINS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css",
    }),
    new HtmlWebpackPlugin({
      title: "The Food App",
      template: "./src/template.html",
      minify: {
        removeAttributeQuotes: true, 
        collapseWhitespace: true, 
        removeComments: true
      }
    }),
  
  ],
}); 


