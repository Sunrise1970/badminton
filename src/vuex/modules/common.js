import * as types from '../types/common'

const state = {
  showLoading: false,
  showTip: {}
}

const mutations = {
  [types.SET_LOADING] (state, showLoading) {
    state.showLoading = showLoading
  },
  [types.SET_TIP] (state, tipMsg, tipState) {
    state.showTip = {
      tipShow: tipState,
      tipMsg: tipMsg
    }
  }
}

export default { state, mutations }
