
const webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: {
      indexjs:"./static/js/index.js"
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.min.js'
      }
  },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs"
            }
          }
        },
          { test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader",
            options:{
              
            }
          }
        ]
      }
      
  };