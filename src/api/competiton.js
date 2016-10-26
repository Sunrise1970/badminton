import {
  attend,
  competitonList,
  competitonIntro,
  competitonMember,
  competitonAgainst,
  competitonUser,
  againstDetail
 } from '../resource'

// 比赛报名
export const toAttend = (attendUserObj) => {
  let option = {
    user: attendUserObj.user,
    competitonType: attendUserObj.competitonType,
    competitonId: attendUserObj.competitonId
  }
  console.log('toAttend option: ', option)
  return attend.get(option)
}

// 比赛列表
export const getCompetitonList = () => {
  let option = {}
  return competitonList.get(option)
}

// 比赛详情
export const getCompetitonIntro = (competitonId) => {
  let option = {
    _id: competitonId
  }
  return competitonIntro.get(option)
}

// 参加比赛人员信息
export const getCompetitonMember = (competitonId, type) => {
  let option = {
    competiton_id: competitonId,
    competiton_type: type
  }
  return competitonMember.get(option)
}
// 比赛对阵信息
export const getCompetitonAgainst = (competitonId, competitonType, competitonProcessType) => {
  let option = {
    competiton_id: competitonId,
    competiton_type: competitonType,
    competiton_process_type: competitonProcessType
  }
  return competitonAgainst.get(option)
}

// 当前比赛用户信息
export const getCompetitonUser = (tel, id) => {
  let option = {
    competiton_id: id,
    tel: tel
  }
  return competitonUser.get(option)
}

// 对阵详情信息
export const getAgainstDetail = (againstId) => {
  let option = {
    id: againstId
  }
  return againstDetail.get(option)
}
