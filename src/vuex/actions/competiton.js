import * as types from '../types/competiton'
import { toAttend, getCompetitonList, getCompetitonIntro } from '../../api/competiton'

// 设置参加比赛
export const setAttend = ({ dispatch, state }, attend) => {
  console.log('action: from client input', attend)
  console.log('action: from client input attend.name', attend.name)
  return new Promise((resolve, reject) => {
    toAttend(attend)
    .then((res) => {
      res = res.json() || {}
      console.log('action: from server return', res)
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
