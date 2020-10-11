const VueLoaderPlugin = require("vue-loader/lib/plugin");


module.exports = {
 
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.js", 
    vendor: "./src/vendor.js"
  },

  module: {
    rules: [
// RULES FOR ASSETS
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "assets/images",
              publicPath: "assets/images",
            },
            
          },
          {
            loader: "image-webpack-loader",
            options: {
             //compress jpeg and png
              mozjpeg: {
                progressive: true
              },
              optipng: {
                enabled: true
              }

            }
          }
        ],
      },
// VUE FILES
      { test: /\.vue$/, loader: "vue-loader" },
    ],
  },
//PLUGINS
  plugins: [
    new VueLoaderPlugin(),
  ],
};









// const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
 
//   devtool: "inline-source-map",
//   entry: "./src/main.js",
  
//   module: {
//     rules: [
// // RULES FOR ASSETS
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               esModule: false,
//               name: "[name].[hash].[ext]",
//               outputPath: "assets/images",
//               publicPath: "assets/images",
//             },
//           },
//         ],
//       },
// // VUE FILES
//       { test: /\.vue$/, loader: "vue-loader" },
//     ],
//   },
// //PLUGINS
//   plugins: [
//     new VueLoaderPlugin(),
//   ],
// };


