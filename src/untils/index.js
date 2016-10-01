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
  return result
}

let returnFormat = (time) => {
  return time.toString().length < 2 ? ('0' + time) : time
}
