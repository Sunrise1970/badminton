/**
 * 将时间戳转换成时间 - getDateFormat(timeStamp, format)
 * @param  {DateString}            timestamp default: 当前时间
 * @param  {formatString}          fmt  default: yyyy-mm-dd  y:年 m:月 d:日 w:星期 h:小时 M:分钟 s:秒
 * @result {String} return         ;esult         时间
 */

exports.getDateFormat = (timestamp, fmt) => {
  let D = new Date()
  let week = '日一二三四五六'
  timestamp && D.setTime(timestamp)
  fmt = fmt || 'yyyy-mm-dd'
  let d = {
    'm+': D.getMonth() + 1,
    'd+': D.getDate(),
    'w+': week.charAt(D.getDay()),
    'h+': D.getHours(),
    'M+': D.getMinutes(),
    's+': D.getSeconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (D.getFullYear() + '').slice(-RegExp.$1.length))
  }
  Object.keys(d).forEach((key) => {
    if (new RegExp(`(${key})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? d[key] : (`00${d[key]}`).slice(('' + d[key]).length))
    }
  })
  return fmt
}

/**
 * 验证身份证有效性 - validateIdCard(idCard)
 * @param  {String}  idCard         身份证号码
 * @result {boolean} result         验证有效与否
 */
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

/**
 * 设置cookie - setCookie(option)
 * @param {Object}   option                   参数
 * @param {String}   option -- key            键
 * @param {String}   option -- value          值
 * @param {Number}   option -- expireDays     过期时间
 * @param {Number}   option -- domain         域
 * @param {Number}   option -- routing        路径
 */
exports.setCookie = function (option) {
  let optionDefault = {
    key: '',
    value: '',
    expireDays: 30,
    domain: '',
    routing: '/'
  }
  for (let item in option) {
    optionDefault[item] = option[item]
  }
  let exdate = new Date()
  let cookie
  console.log(optionDefault)
  exdate.setDate(exdate.getDate() + optionDefault.expireDays)
  cookie = `${optionDefault.key}=${encodeURIComponent(optionDefault.value)}`
  optionDefault.domain && (cookie += `; domain=${optionDefault.domain}`)
  optionDefault.routing && (cookie += `; routing=${optionDefault.routing}`)
  optionDefault.expireDays && (cookie += `; expireDays=${exdate}`)
  console.log(cookie)
  document.cookie = cookie
}

/**
 * 获取cookie - getCookie(key)
 * @param  {Object}   key                 键
 * @result {*}        result              返回cookie值，没有就返回空
 */
exports.getCookie = function (key) {
  let _cookie = document.cookie
  let itemsArr = _cookie.split('; ')
  let item = []
  for (let i = 0; i < itemsArr.length; i++) {
    item = itemsArr[i].split('=')
    if (key === item[0] && item.length === 2) {
      return decodeURIComponent(item[1])
    }
  }
  return ''
}

/**
 * 删除cookie - removeCookie(key)
 * @param  {Object}   key                 键
 */
exports.removeCookie = function (key) {
  let date = new Date()
  date.setDate(date.getDate() - 10000 * 3600 * 31)
  document.cookie = `${key}=; path=/; expires = ${date.toString()}`
}
