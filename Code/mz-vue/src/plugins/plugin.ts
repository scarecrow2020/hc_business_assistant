import Vue from 'vue'
// import confirm from './confirm'
// import snackbar from './snackbar'
import _axios from './axios'

interface NotifyResultParams {
  success: boolean,
  msg: string
}

// const STORAGE_KEY = 'app-fae-'
// const localStorage = {
//   save (key: string, value: any) {
//     let data = {
//       data: value,
//       cacheTime: new Date()
//     }
//     window.localStorage.setItem(STORAGE_KEY + key, JSON.stringify(data))
//   },
//   get (key: string) {
//     return JSON.parse(window.localStorage.getItem(STORAGE_KEY + key) || '{}').data
//   },
//   clear (key: string) {
//     key = key ? STORAGE_KEY + key : STORAGE_KEY
//     const storage = window.localStorage
//     for (let i in storage) {
//       if (i.indexOf(key) === 0) {
//         storage.removeItem(key)
//       }
//     }
//   }
// }

const Plugin = {
  install (Vue: any) {
    Vue.prototype.$axios = _axios
    // Vue.prototype.$snackbar = this.notify
    // Vue.prototype.$confirmBox = confirm
    // Vue.prototype.$service = {
    //   localStorage
    // }
  }
  // ,
  // notify: {
  //   notify: ({ success, msg }: NotifyResultParams, options: any) => {
  //     snackbar(success ? 'success' : 'error', msg, options)
  //   },
  //   success: (message: string, options: any) => {
  //     snackbar('success', message, options)
  //   },
  //   error: (message: string, options: any) => {
  //     snackbar('error', message, options)
  //   }
  // }
}

Vue.use(Plugin)
export default Plugin
