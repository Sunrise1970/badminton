import Vue from 'vue'
import Vuex from 'vuex'

import activity from './modules/activity'
import competiton from './modules/competiton'
import userInfo from './modules/userInfo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    activity,
    competiton,
    userInfo
  },
  strict: debug,
  middlewares: debug ? [] : []
})
