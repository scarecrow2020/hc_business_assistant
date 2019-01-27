import Vue from 'vue'
import './plugins/vuetify'
import './plugins/museUi'
import './plugins/hcPlugins'
import './plugins/iview'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/scss'
import './components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
