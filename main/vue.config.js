const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    port: 9999,
    open: true,
    disableHostCheck: true,
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = '三维输电线路平台'
        return args
      })
  }
};
