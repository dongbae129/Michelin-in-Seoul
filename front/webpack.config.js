const port = process.env.PORT || 4040;
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  name: "word-relay-dev",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: ["./src/public/index.js"],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],

        exclude: path.join(__dirname, "node_modules"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
      },
    ],
  },
  //   plugins: [new MiniCssExtractPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: "./src/public",
    historyApiFallback: true,
    port: port,
  },
};
