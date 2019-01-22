import Vue from 'vue'
import HcInput from './HcInput'
import HcSnackbar from './HcSnackbar'
import HcFilter from './HcFilter'
import HcList from './HcList'
import HcChip from './HcChip'

const components = {
  HcInput,
  HcSnackbar,
  HcFilter,
  HcList,
  HcChip
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
