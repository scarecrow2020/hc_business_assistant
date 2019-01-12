import Vue from 'vue'
import HcSnackbar from './HcSnackbar'

const components = {
  HcSnackbar
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
