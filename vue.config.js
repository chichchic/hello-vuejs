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
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[hash].css",
    },
  },
  configureWebpack: {
    plugins: [
      new WebpackRTLPlugin(),
        prependData: `@import "@/assets/scss/index.scss";`
      }
    }
    ],
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
