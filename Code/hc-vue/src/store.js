import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    login: false
  },
  mutations: {
    setUserInfo (state, userInfo = {}) {
      state.login = !!userInfo.loginUuid
      state.userInfo = userInfo
    }
  },
  actions: {

  }
})
