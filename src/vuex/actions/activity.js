import * as types from '../types/activity'
import { getActivityList } from '../../api/activity'

export const setActivityList = ({ dispatch, state }) => {
  return new Promise((resolve, reject) => {
    getActivityList()
    .then((res) => {
      res = res.json() || {}
      if (res.code === 200) {
        console.log('action-activityList: from server return', res.data.list)
        dispatch(types.GET_ACTIVITY_LIST, res.data.list)
        resolve(res)
      } else {
        reject(res)
      }
    })
    .catch((error) => {
      dispatch(types.GET_ACTIVITY_LIST_FAILURE)
      reject(error)
    })
  })
}
