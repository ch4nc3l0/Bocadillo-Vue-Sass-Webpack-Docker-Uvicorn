import '@babel/polyfill';
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require("./webpack.common.babel");
const merge = require("webpack-merge");

module.exports = merge(common,{
    mode: 'production',
    output: {
      filename: "webpack/[name].[contentHash].js",
      path: path.resolve(__dirname, "webpack")
    },
    optimization: {
      minimizer:[
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          template: "./templates/index.html",
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        })   
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "webpack/[name].[contentHash].css" }),
        new CleanWebpackPlugin()
      ],
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    }
  });