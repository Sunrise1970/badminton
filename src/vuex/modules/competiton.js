import * as types from '../types/competiton'

const state = {
  list: [],
  tip: '',
  intro: ''
}

const mutations = {
  [types.GET_COMPETITON_LIST] (state, list) {
    console.log('modules-competitonList:', list)
    state.list = list
  },
  [types.GET_COMPETITON_LIST_FAILURE] (state) {
    state.tip = 'error tip'
  },
  [types.GET_COMPETITON_INTRO] (state, intro) {
    console.log('modules-competitonIntro:', intro)
    state.intro = intro
  },
  [types.GET_COMPETITON_INTRO_FAILURE] (state) {
    state.tip = 'error tip'
  }
}

export default { state, mutations }
