import store from '../store'

let activity = store.state.activity

export const list = () => {
  return activity.list
}
