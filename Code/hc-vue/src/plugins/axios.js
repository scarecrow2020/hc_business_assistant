'use strict'

import Vue from 'vue'
import axios from 'axios'
import plugins from './hcPlugins'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let config = {
  baseURL: '/api',
  timeout: 60 * 1000, // Timeout
  transformRequest: [data => {
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
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(config => {
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
  return config// 只有return config后，才能成功发送请求
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
_axios.interceptors.response.use(response => {
  // Do something with response data
  let data = response.data
  return { data, success: true }
}, err => {
  let data = err.response.data
  // Do something with response error
  plugins.notify({ message: data.message })
  let result = { data, success: false }
  return Promise.reject(result)
})

Plugin.install = (Vue, options) => {
  // Vue.axios = _axios
  // window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

// export default Plugin
