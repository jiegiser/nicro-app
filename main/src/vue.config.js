module.exports = {
  devServer: {
    port: 5500,
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