import * as types from '../types/competiton'
import { toAttend, getCompetitonList } from '../../api/competiton'

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
      dispatch('GET_COMPETITON_LIST_FAILURE')
      reject(error)
    })
  })
}
