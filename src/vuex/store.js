import Vue from 'vue'
import Vuex from 'vuex'

import activity from './modules/activity'
import userInfo from './modules/userInfo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    activity,
    userInfo
  },
  strict: debug,
  middlewares: debug ? [] : []
})
