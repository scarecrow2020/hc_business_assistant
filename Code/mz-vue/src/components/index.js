import Vue from 'vue'
import MzTable from './MzTable'
import MzTable1 from './MzTable1'

const components = {
  MzTable,
  MzTable1
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
