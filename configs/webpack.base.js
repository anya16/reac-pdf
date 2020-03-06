const path = require('path')
module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"]
  },
  context: path.resolve(__dirname, "../src"),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
        exclude: path.resolve(__dirname, "./node_modules")
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: path.resolve(__dirname, "./node_modules")
      },
      {
        test: /\.(css|less|scss)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "./images",
      //         publicPath: "/images"
      //       }
      //     }
      //   ]
      // }
    ]
  },
  performance: {
    hints: false
  }
};