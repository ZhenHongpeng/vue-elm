// 入口 工具
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mockServer' //加载MockServer

Vue.use(MintUI)

new Vue({
  el:'#app',
  render: h => h(App),
  router,  // 使用vue-router
  store,   // 使用vuex
})
