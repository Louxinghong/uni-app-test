/**
 * 默认请求头
 * @type {object}
 */
const defaultHeader = {
  'ga-appname': 'louxiaohong'
}

/**
 * 网络请求
 * @param {string} url 请求地址
 * @param {string} method 请求类型
 * @param {object} data 请求数据
 * @param {object} header 请求头
 */
const ajax = (url, method, data, header) =>
  new Promise((resolve, reject) => {
    return uni.request({
      url,
      method: method.toUpperCase(),
      data,
      header: { ...defaultHeader, ...header },
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })

export default ajax
