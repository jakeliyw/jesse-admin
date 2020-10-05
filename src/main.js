import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import io from 'socket.io-client'

Vue.config.productionTip = false
// 为连接后端的socket.io绑定全局事件
Vue.prototype.$io = io

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
