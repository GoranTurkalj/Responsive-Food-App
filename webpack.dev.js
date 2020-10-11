const path = require("path");
//Requiring common config i merge-webpack to be merged with dev config
const common = require("./webpack.common"); 
const { merge } = require("webpack-merge"); 

//Requiring Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin"); 


//Merging common config and this entire object
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), //webpack-dev-server will serve from memory, will not create dist.
    
  },
  module: {
    rules: [
 //SASS RULES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      {
        test: /\.scss$/,
          exclude: "/node_modules/",
            use: [      
              "vue-style-loader",  
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
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
      title: "The Food App",
      template: "./src/template.html",
    }),
  ]

}); 


