import * as types from '../types/competiton'
import {
  toAttend,
  getCompetitonList,
  getCompetitonIntro,
  getCompetitonMember,
  getCompetitonAgainst,
  getCompetitonUser,
  getAgainstDetail
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
export const setCompetitonMember = ({ dispatch, state }, competitonId, type) => {
  return new Promise((resolve, reject) => {
    getCompetitonMember(competitonId, type)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setCompetitonMember: from server return', res.data)
        dispatch(types.GET_COMPETITON_MEMBER, res.data)
        dispatch(types.GET_COMPETITON_TYPE, type)
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
export const setCompetitonAgainst = ({ dispatch, state }, competitonId, type, processType) => {
  return new Promise((resolve, reject) => {
    getCompetitonAgainst(competitonId, type, processType)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setCompetitonAgainst: from server return', res.data.list)
        dispatch(types.GET_COMPETITON_AGAINST, res.data.list)
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
export const setCompetitonUser = ({ dispatch, state }, tel, id) => {
  return new Promise((resolve, reject) => {
    getCompetitonUser(tel, id)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setCompetitonUser: from server return', res.data)
        dispatch(types.GET_COMPETITON_USER, res.data)
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
// 设置对阵信息详情
export const setAgainstDetail = ({ dispatch, state }, againstId) => {
  return new Promise((resolve, reject) => {
    getAgainstDetail(againstId)
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-setAgainstDetail: from server return', res.data.detail)
        dispatch(types.GET_AGAINST_DETAIL, res.data.detail)
        resolve(res)
      } else {
        reject(res)
      }
    })
    .catch((error) => {
      reject(error)
    })
  })
}
