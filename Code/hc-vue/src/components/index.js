import Vue from 'vue'
import HcSnackbar from './HcSnackbar'
import HcFilter from './HcFilter'
import HcList from './HcList'
import HcChip from './HcChip'

const components = {
  HcSnackbar,
  HcFilter,
  HcList,
  HcChip
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
