import store from '../store'

let userInfo = store.state.userInfo

export const tel = () => {
  return userInfo.tel
}
