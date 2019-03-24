const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require("./webpack.common.babel");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const merge = require("webpack-merge");

module.exports = merge(common,{
    mode: 'production',
    output: {
      filename: "dist/[name].[contentHash].js",
      path: path.resolve(__dirname, 'webpack')
    },
    optimization: {
      minimizer:[
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          template: "./templates/index.html",
          filename: "dist/index.html",
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        })   
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "dist/[name].[contentHash].css" }),
        new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin({ logo:'./static/img/zombie.png', prefix:'dist/[hash]' }),
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