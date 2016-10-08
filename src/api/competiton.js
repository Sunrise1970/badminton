import {
  attend,
  competitonList,
  competitonIntro,
  competitonMember,
  competitonAgainst,
  competitonUser
 } from '../resource'

// 比赛报名
export const toAttend = (attendUserObj) => {
  let option = {
    name: attendUserObj.name,
    card: attendUserObj.card,
    tel: attendUserObj.tel,
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
    competitonId: competitonId
  }
  return competitonIntro.get(option)
}

// 参加比赛人员信息
export const getCompetitonMember = (competitonId) => {
  let option = {
    competitonId: competitonId
  }
  return competitonMember.get(option)
}
// 比赛对阵信息
export const getCompetitonAgainst = (competitonId) => {
  let option = {
    competitonId: competitonId
  }
  return competitonAgainst.get(option)
}

// 当前比赛用户信息
export const getCompetitonUser = (competitonId) => {
  let option = {
    competitonId: competitonId
  }
  return competitonUser.get(option)
}
