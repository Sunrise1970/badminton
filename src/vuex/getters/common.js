import store from '../store'

let common = store.state.common

export const showLoading = () => {
  return common.showLoading
}

export const showTip = () => {
  return common.showTip
}
