import * as types from '../types/common'

// 显示loading层
export const showLoading = ({ dispatch, state }) => {
  dispatch(types.SET_LOADING, true)
}

// 隐藏loading层
export const hideLoading = ({ dispatch, state }) => {
  dispatch(types.SET_LOADING, false)
}

// 显示toast层
export const showTip = ({ dispatch, state }, tipMeg) => {
  dispatch(types.SET_TIP, tipMeg, true)
}

// 隐藏toast层
export const hideTip = ({ dispatch, state }) => {
  dispatch(types.SET_TIP, '', false)
}
