import * as types from '../types/userInfo'

// let localStorage = window.localStorage
// let storeUserInfo = (data) => {
//     localStorage.setItem('userInfo', JSON.stringify(data))
// }

// 获取存储在localStorage中的数据
export const getUserInfo = ({ dispatch, state }) => {
  // if (localStorage.getItem('userInfo')) {
  //     let data = JSON.parse(localStorage.getItem('userInfo'))
  //     dispatch(types.SET_USERINFO, data)
  // } else {
  const data = {
    tel: '15622333072'
  }
  dispatch(types.SET_USERINFO, data)
  // }
}
