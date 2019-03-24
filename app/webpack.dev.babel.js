const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const common = require("./webpack.common.babel");

module.exports = merge(common,{
    mode: 'development',
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "webpack")
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: './templates/index.html'
      }),
    ],
    module: {
      rules: [{ 
        test: /\.sass$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ] 
      }]
    }
  });