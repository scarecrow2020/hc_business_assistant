import router from '@/router'
import axios from 'axios'
import Dict from '@/data/dict'

const paramsHandler = (url: string) => {
  return url.endsWith('&') ? url.substring(0, url.length - 1) : url
}
let config = {
  baseURL: Dict.BASE.BASE_URL,
  timeout: 20 * 1000, // 请求超时的时间限制
  headers: { // 设置默认请求头
    'X-Requested-With': 'XMLHttpRequest' // 为ajax异步请求
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  // withCredentials: true, // Check cross-site Access-Control跨域处理
  transformRequest: [(data: any) => {
    if (data) {
      let ret = ''
      for (let [key, value] of Object.entries(data)) {
        if (value !== null && value !== undefined) {
          if (value instanceof Array || value instanceof Object) {
            value = JSON.stringify(value)
          }
          ret += `${encodeURIComponent(key)}=${encodeURIComponent(`${value}`)}&`
        }
      }
      return paramsHandler(ret)
    }
  }]
  // 在 then / catch之前对响应数据进行更改
  // transformResponse: [(data: any) => { return data }]
}

const _axios = axios.create(config)

_axios.interceptors.request.use((config: any) => {
  if (['get', 'delete'].includes(config.method)) {
    let { url, params } = config
    if (params && Object.getOwnPropertyNames(params).length > 0) {
      url += url.indexOf('?') < 0 ? '?' : '&'
      for (let [key, value] of Object.entries(params)) {
        // 如果java自定义参数解析可以接收数组，这里则和Object的处理一样
        // 否则传字符串后台分割
        if (value !== null && value !== undefined) {
          if (value instanceof Array) {
            value = value.join()
          } else if (value instanceof Object) {
            value = JSON.stringify(value)
          }
          url += `${key}=${value}&`
        }
      }
    }
    config.url = encodeURI(paramsHandler(url))
    config.params = null
  }
  return config
}, error => {
  return Promise.reject(error)
})

_axios.interceptors.response.use(response => {
  const data = response.data
  if (data.isLogin === false) {
    router.push({ name: 'Login' })
  }
  return data
}, error => {
  return Promise.reject(error)
})
export default _axios
