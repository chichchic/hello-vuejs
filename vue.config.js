module.export = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/[file_name].scss"`
      }
    }
  },
  productionSourceMap: true,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}