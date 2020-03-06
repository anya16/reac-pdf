process.env.NODE_ENV = "lib";
// const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path')
module.exports = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  entry: {
    index: ["babel-polyfill", path.resolve(__dirname, "../src/index.tsx")]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "app.js",
    library: "test",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["env", "stage-2"],
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"]
      },
      {
        test: /\.(css|less|scss)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
      verbose: true,
      dry: false
    })
  ]
};