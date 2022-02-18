const rtlcss = require("rtlcss");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/index.scss";`,
      },
    },
    // extract: {
    //   filename: "css/[name].[hash].css",
    //   chunkFilename: "css/[name].[hash].css",
    // },
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
    config.plugin("css").use(MiniCssExtractPlugin, [
      {
        filename: "[name].css",
        chunkFilename: "[id].css",
      },
    ]);
    // config.module
    //   .rule("scss")
    //   .test(/RTLCSSExamples.vue/)
    //   .oneOf("vue")
    //   .use("vue-style")
    //   .loader("vue-style-loader")
    //   .end()
    //   .end()
    //   .oneOf("normal")
    //   .use("sass")
    //   .loader("sass-loader")
    //   .tap(() => ({
    //     prependData: `@import "@/assets/scss/index.scss";`,
    //   }))
    //   .end()
    //   .end()
    //   .after("vue")
    //   .use("postcss-loader")
    //   .tap(() => ({
    //     postcssOptions: {
    //       plugins: [rtlcss({})],
    //     },
    //   }));
    config.module
      .rule("scss")
      .oneOf("vue")
      .test(/RTLCSSExamples/)

      .use("postcss-loader")
      .tap(() => ({
        sourceMap: true,
        postcssOptions: {
          plugins: [
            rtlcss({
              stringMap: [
                {
                  name: "ltr-rtl",
                  priority: 100,
                  search: "ltr-",
                  replace: "rtl-",
                  options: {
                    ignoreCase: false,
                    greedy: true,
                  },
                },
              ],
            }),
          ],
        },
      }))
      .end()
      .before("sass-loader")
      .use("vue-style-loader")
      .end()
      .oneOf("css")
      .use("mini-extract-css-loader")
      .loader(MiniCssExtractPlugin.loader);
  },
};
