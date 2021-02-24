const microApps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: '3d-module',
    entry: '//localhost:3000',
    activeRule: '/#/react'
  }
]

console.log(process.env.VUE_APP_SUB_VUE, 'process.env.VUE_APP_SUB_VUE')

const apps = microApps.map((item) => {
  return {
    ...item,
    container: '#frame', // 子应用挂载的 div
    props: {
      routerBase: item.activeRule, // 下发基础路由
    }
  }
})

export default apps
