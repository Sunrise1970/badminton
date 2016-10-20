import store from '../store'

let competiton = store.state.competiton

export const list = () => {
  return competiton.list
}
export const intro = () => {
  return competiton.intro
}
export const memberList = () => {
  return competiton.memberList
}
export const againstList = () => {
  return competiton.againstList
}
export const competitonUserList = () => {
  return competiton.competitonUserList
}
export const competitonType = () => {
  return competiton.competitonType
}
export const againstDetail = () => {
  return competiton.againstDetail
}
