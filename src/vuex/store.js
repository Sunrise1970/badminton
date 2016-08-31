import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './modules/userInfo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    userInfo
  },
  strict: debug,
  middlewares: debug ? [] : []
})
