import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss'
import './components'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.axios = axios
declare module "vue/types/vue" {
  interface Vue {
    axios: any;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
