/* eslint-disable @typescript-eslint/no-var-requires */
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://test.test.com",
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      // @see https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin
      new CaseSensitivePathsPlugin(),
      new webpack.DefinePlugin({
        PROJECT_BUILD_DATE: JSON.stringify(new Date().toISOString()),
      }),
    ],
    resolve: {
      alias: {
        "@@types": path.join(__dirname, "src/@types"),
      },
    },
  },
};
