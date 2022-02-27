const WebpackRTLPlugin = require("webpack-rtl-plugin");
const webpack = require("webpack");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/index.scss";`,
      },
    },
    extract: {
      filename: "css/[name].css",
      chunkFilename: "css/[name].[hash].css",
    },
  },
  configureWebpack: {
    plugins: [
      new WebpackRTLPlugin(),
      //https://hodolman.com/24
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
