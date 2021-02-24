import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import startQiankun from './micro'
import 'element-ui/packages/theme-chalk/lib/index.css'
import './assets/index.scss'
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

startQiankun()