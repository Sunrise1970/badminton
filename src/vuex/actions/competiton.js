import * as types from '../types/competiton'
import {
  toAttend,
  getCompetitonList,
  getCompetitonIntro,
  getCompetitonMember,
  getCompetitonAgainst,
  getCompetitonUser
 } from '../../api/competiton'

// 设置参加比赛
export const setAttend = ({ dispatch, state }, attend) => {
  console.log('action: from client input', attend)
  console.log('action: from client input attend.name', attend.name)
  return new Promise((resolve, reject) => {
    toAttend(attend)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action: from server return', res)
        resolve(res)
      }
    })
    .catch((error) => {
      dispatch(types.SET_ATTEND_FAILURE)
      reject(error)
    })
  })
}

// 设置比赛列表
export const setCompetitonList = ({ dispatch, state }) => {
  return new Promise((resolve, reject) => {
    getCompetitonList()
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setCompetitonList: from server return', res.data.list)
        dispatch(types.GET_COMPETITON_LIST, res.data.list)
        resolve(res)
      } else {
        reject(res)
      }
    })
    .catch((error) => {
      dispatch(types.GET_COMPETITON_LIST_FAILURE)
      reject(error)
    })
  })
}
// 设置比赛详情
export const setCompetitonIntro = ({ dispatch, state }, competitonId) => {
  return new Promise((resolve, reject) => {
    getCompetitonIntro(competitonId)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setCompetitonIntro: from server return', res.data)
        dispatch(types.GET_COMPETITON_INTRO, res.data)
        resolve(res)
      } else {
        reject(res)
      }
    })
    .catch((error) => {
      dispatch(types.GET_COMPETITON_INTRO_FAILURE)
      reject(error)
    })
  })
}
// 设置比赛人员列表
export const setCompetitonMember = ({ dispatch, state }, competitonId) => {
  return new Promise((resolve, reject) => {
    getCompetitonMember(competitonId)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setCompetitonMember: from server return', res.data.memberList)
        dispatch(types.GET_COMPETITON_MEMBER, res.data.memberList)
        resolve(res)
      } else {
        reject(res)
      }
    })
    .catch((error) => {
      dispatch(types.GET_COMPETITON_MEMBER_FAILURE)
      reject(error)
    })
  })
}
// 设置比赛对阵列表
export const setCompetitonAgainst = ({ dispatch, state }, competitonId) => {
  return new Promise((resolve, reject) => {
    getCompetitonAgainst(competitonId)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setCompetitonAgainst: from server return', res.data.againstList)
        dispatch(types.GET_COMPETITON_AGAINST, res.data.againstList)
        resolve(res)
      } else {
        reject(res)
      }
    })
    .catch((error) => {
      dispatch(types.GET_COMPETITON_AGAINST_FAILURE)
      reject(error)
    })
  })
}
// 设置当前用户比赛信息
export const setCompetitonUser = ({ dispatch, state }, competitonId) => {
  return new Promise((resolve, reject) => {
    getCompetitonUser(competitonId)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setCompetitonUser: from server return', res.data.competitonUserList)
        dispatch(types.GET_COMPETITON_USER, res.data.competitonUserList)
        resolve(res)
      } else {
        reject(res)
      }
    })
    .catch((error) => {
      dispatch(types.GET_COMPETITON_USER_FAILURE)
      reject(error)
    })
  })
}
