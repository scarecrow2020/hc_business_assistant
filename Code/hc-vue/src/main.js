import Vue from 'vue'
// import './plugins/vuetify'
import './plugins/hcPlugins.js'
import './plugins/iview.js'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/css/base.css'
import './assets/scss'
import './components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
