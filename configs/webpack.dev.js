const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: "development",
  entry: {
    index: [
      "babel-polyfill",
      path.resolve(__dirname, "../example/index.tsx")
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
  },
  devServer: {
    hot: true,
    publicPath: "/"
  },
  devtool: "eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../index.html"),
      inject: true
    })
  ]
});