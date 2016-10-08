import { activityList } from '../resource'

// 活动列表
export const getActivityList = () => {
  let option = {}
  return activityList.get(option)
}
