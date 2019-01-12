import Vue from 'vue'
import { Notice } from 'iview'
import 'iview/dist/styles/iview.css'

const iview = {
  install (Vue) {
    Vue.prototype.$Notice = Notice
  }
}
Vue.use(iview)
