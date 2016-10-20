/**
 * 将时间戳转换成时间 - getDateFormat(timeStamp, format, mark)
 * @param  {String} timeStamp    时间戳
   * @param  {String} type       时分秒显示状态（1：不显示 2： 显示）
 * @result {String} result         时间
 */

exports.getDateFormat = (timeStamp, type) => {
  let d
  let result
  if (timeStamp) {
    d = new Date(timeStamp)
  } else {
    d = new Date((new Date()).valueOf())
  }
  let year = '' + d.getFullYear()
  let month = '' + returnFormat((d.getMonth() + 1))
  let day = '' + returnFormat(d.getDate())
  let hour = '' + returnFormat(d.getHours())
  let minute = '' + returnFormat(d.getMinutes())
  let second = '' + returnFormat(d.getSeconds())
  if (type === 1) {
    result = [year, month, day].join('-')
  } else {
    result = [year, month, day].join('-') + ' ' + [hour, minute, second].join(':')
  }
  if (!isNaN(d.getFullYear())) {
    return result
  } else {
    return '尚未确定具体时间'
  }
}

let returnFormat = (time) => {
  return time.toString().length < 2 ? ('0' + time) : time
}

exports.validateIdCard = (idCard) => {
  // 15位和18位身份证号码的正则表达式
  var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

  // 如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (regIdCard.test(idCard)) {
    if (idCard.length === 18) {
      let idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 将前17位加权因子保存在数组里
      let idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]// 这是除以11后，可能产生的11位余数、验证码，也保存成数组
      let idCardWiSum = 0 // 用来保存前17位各自乖以加权因子后的总和
      for (let i = 0; i < 17; i++) {
        idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i]
      }

      let idCardMod = idCardWiSum % 11 // 计算出校验码所在数组的位置
      let idCardLast = idCard.substring(17) // 得到最后一位身份证号码

      // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod === 2) {
        if (idCardLast === 'X' || idCardLast === 'x') {
          return true
        } else {
          console.log('1')
          return
        }
      } else {
      // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if (idCardLast === idCardY[idCardMod].toString()) {
          return true
        } else {
          console.log('2')
          return
        }
      }
    }
  } else {
    console.log('3')
    return
  }
}
