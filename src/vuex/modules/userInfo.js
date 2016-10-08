import * as types from '../types/userInfo'

const state = {
  // id: '',
  // accessToken: '',
  // loginName: '',
  // avatarUrl: '',
  tel: ''
}

const mutations = {
  // 基本信息
  [types.SET_USERINFO] (state, data) {
    // try {
    //     state.id = data.id
    //     state.accessToken = data.accessToken
    //     state.loginName = data.loginName
    //     state.avatarUrl = data.avatarUrl
    state.tel = data.tel
    // } catch (err) {
    //     console.log(err)
    // }
  }
}

export default {
  state,
  mutations
}
