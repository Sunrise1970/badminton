import { attend, competitonList, competitonIntro } from '../resource'

// 比赛报名
export const toAttend = (attendUserObj) => {
  let option = {
    name: attendUserObj.name,
    card: attendUserObj.card,
    tel: attendUserObj.tel,
    competitonType: attendUserObj.competitonType
  }
  return attend.save(option)
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
