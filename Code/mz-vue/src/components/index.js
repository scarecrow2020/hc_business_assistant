import Vue from 'vue'
import MzTable from './MzTable'

const components = {
  MzTable
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
