
import Vue from 'vue'
import router from '@/router'
import axios from 'axios'
import Dict from '@/data/dict'

// 取消请求
const CancelToken = axios.CancelToken
// 是否需要拦截code==-1的状态
let is_log: boolean = false

let config = {
  baseURL: Dict.BASE.BASE_URL,
  timeout: 20 * 1000, // 请求超时的时间限制
  // headers: { // 设置默认请求头
  //   'X-Requested-With': 'XMLHttpRequest', // 为ajax异步请求
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  // withCredentials: true, // Check cross-site Access-Control跨域处理
  transformRequest: [(data: any) => {
    if (data) {
      console.log(data)
      let result = ''
      for (let [key, value] of Object.entries(data)) {
        if (value) {
          result += `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}&`
        }
      }
      return result.endsWith('&') ? result.substring(0, result.length - 1) : result
    }
  }]
}
const _axios = axios.create(config)

// 开始设置请求 发起的拦截处理
// config 代表发起请求的参数的实体
let requestName: any
_axios.interceptors.request.use((config: any) => {
  console.log(config)
    // 得到参数中的 requestName 字段，用于决定下次发起请求，取消对应的 相同字段的请求
    // 如果没有 requestName 就默认添加一个 不同的时间戳
    // if (['post', 'put'].includes(config.method)) {
    //     let data = qs.parse(config.data)
    //     if (config.data && data.requestName) {
    //         requestName = qs.parse(config.data).requestName;
    //     } else {
    //         requestName = new Date().getTime();
    //     }
    //     if (config.data.indexOf('is_log') !== -1) {
    //         is_log = true;
    //     }
    // } else {
    //     if (config.params && config.params.requestName) {
    //         requestName = config.params.requestName;
    //     } else {
    //         requestName = new Date().getTime();
    //     }
    //     if (config.params.is_log) {
    //         is_log = true;
    //     }
    // }
    // 判断，如果这里拿到的参数中的 requestName 在上一次请求中已经存在，就取消上一次的请求
    // if (requestName) {
    //     if (axios[requestName] && axios[requestName].cancel) {
    //         axios[requestName].cancel('取消了请求');
    //     }
    //     config.cancelToken = new CancelToken( (c: any) => {
    //         axios[requestName] = {};
    //         axios[requestName].cancel = c;
    //     });
    // }
    return config
}, error => {
    return Promise.reject(error)
})

// 请求到结果的拦截处理
// axios.interceptors.response.use( (config: any) => {
//     // 返回请求正确的结果
//     if ((!is_log) && config.data.code === -1) {
//         router.push({path: '/login'});  // 进入登陆页面
//     }
//     if (config.data.code === -2) {
//         router.push({path: '/'}); // 进入实名认证
//     }
//     return config.data;
// }, (error: any) => {
//     return Promise.reject(error);
//     // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
// });
// 将axios 的 post 方法，绑定到 vue 实例上面的 $post
// Vue.prototype.$post =  (url: any, params: any) => {
//     return new Promise((resolve, reject) => {
//         axios.post(url, qs.stringify(params)).then((res: any) => {
//             resolve(res);
//         }).catch((err: any) => {
//             reject(err);
//          });
//      });
// };
// 将axios 的 get 方法，绑定到 vue 实例上面的 $get
// Vue.prototype.$get =  (url: any, params: any) => {
//     return new Promise((resolve, reject) => {
//         axios.get(url, { params: params }).then((res: any) => {
//             resolve(res); // 返回请求成功的数据 data
//         }).catch((err: any) => {
//             reject(err);
//         });
//     });
// }
export default _axios

