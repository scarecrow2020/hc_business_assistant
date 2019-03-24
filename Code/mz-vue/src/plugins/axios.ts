import axios from 'axios'

let config = {
  baseURL: '/api',
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  transformRequest: [(data: any) => {
    if (data) {
      let ret = ''
      for (let [key, value] of Object.entries(data)) {
        if (value) {
          ret += encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(value)) + '&'
        }
      }
      return ret.endsWith('&') ? ret.substring(0, ret.length - 1) : ret
    }
  }]
}

const _axios = axios.create(config)
_axios.interceptors.request.use((config: any) => {
  // Do something before request is sent
  if (['get', 'delete'].includes(config.method)) {
    let [url, params] = [config.url, config.params]
    if (params) {
      url += url.indexOf('?') < 0 ? '?' : '&'
      for (let [key, value] of Object.entries(params)) {
        if (value) {
          if (value instanceof Array || value instanceof Object) {
            value = JSON.stringify(value)
          }
          url += `${key}=${value}&`
        }
      }
      if (url.endsWith('&')) url = url.substring(0, url.length - 1)
    }
    config.url = encodeURI(url)
    config.params = null
  }
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
_axios.interceptors.response.use(response => {
  // Do something with response data
  return response.data
}, error => {
  // console.log(error)
  // Do something with response error
  return Promise.reject(error)
})

export default _axios
