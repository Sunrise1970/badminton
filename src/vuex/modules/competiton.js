import * as types from '../types/competiton'

const state = {
  list: [],
  tip: '',
  intro: '',
  memberList: {},
  againstList: [],
  competitonUserList: {},
  competitonType: 1,
  againstDetail: {},
  lotteryId: ''
}

const mutations = {
  [types.GET_COMPETITON_LIST] (state, list) {
    console.log('modules-competitonList:', list)
    state.list = list
  },
  [types.GET_COMPETITON_LIST_FAILURE] (state) {
    state.tip = 'error tip'
  },
  [types.SET_ATTEND_FAILURE] (state) {
    state.tip = 'error tip'
  },
  [types.GET_COMPETITON_INTRO] (state, intro) {
    console.log('modules-competitonIntro:', intro)
    state.intro = intro
  },
  [types.GET_COMPETITON_INTRO_FAILURE] (state) {
    state.tip = 'error tip'
  },
  [types.GET_COMPETITON_MEMBER] (state, memberList) {
    console.log('modules-competitonMember:', memberList)
    state.memberList = memberList
  },
  [types.GET_COMPETITON_MEMBER_FAILURE] (state) {
    state.tip = 'error tip'
  },
  [types.GET_COMPETITON_AGAINST] (state, againstList) {
    console.log('modules-competitonAgainst:', againstList)
    state.againstList = againstList
  },
  [types.GET_COMPETITON_AGAINST_FAILURE] (state) {
    state.tip = 'error tip'
  },
  [types.GET_COMPETITON_USER] (state, competitonUserList) {
    console.log('modules-competitonUser:', competitonUserList)
    state.competitonUserList = competitonUserList
  },
  [types.GET_COMPETITON_USER_FAILURE] (state) {
    state.tip = 'error tip'
  },
  [types.GET_COMPETITON_TYPE] (state, competitonType) {
    state.competitonType = competitonType
  },
  [types.GET_AGAINST_DETAIL] (state, againstDetail) {
    state.againstDetail = againstDetail
  },
  [types.GET_LOTTERY_ID] (state, lotteryId) {
    state.lotteryId = lotteryId
  }
}

export default { state, mutations }
