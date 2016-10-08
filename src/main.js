import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import { setRouter } from './setRouter'
// import setResource from './setResource'
// import vueTimeAgo from 'vue-timeago'
// import lazyload from 'vue-lazyload'

// Vue.use(VueResource)
Vue.use(VueRouter)
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
Vue.extend({
  components: { App }
})
const router = new VueRouter({
  // history: true,
  hashbang: true,
  saveScrollPosition: true
})
setRouter(router)
// Vue.http.options.emulateJSON = true
// Vue.http.interceptors.push(setResource) // ajax 拦截

sync(store, router)
// 启动路由将跟组件挂载在app
router.start(App, 'app')
