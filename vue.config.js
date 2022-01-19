module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/index.scss";`
      }
    }
  },
  productionSourceMap: true,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}