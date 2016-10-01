import store from '../store'

let competiton = store.state.competiton

export const list = () => {
  return competiton.list
}
export const intro = () => {
  return competiton.intro
}
