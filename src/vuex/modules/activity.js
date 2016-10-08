import * as types from '../types/activity'

const state = {
  list: [],
  tip: ''
}

const mutations = {
  [types.GET_ACTIVITY_LIST] (state, list) {
    console.log('modules-activityList:', list)
    state.list = list
  },
  [types.GET_ACTIVITY_LIST_FAILURE] (state) {
    state.tip = 'error tip'
  }
}

export default { state, mutations }
