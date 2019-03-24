import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0
  },
  mutations: {
    add (state, payload = { count: 1 }) {
      state.count += payload.count
    }
  },
  actions: {
    addAction ({ commit }, payload) {
      commit('add', payload)
    }
  },
  getters: {
    countName: state => state.count + 'name',
    hello: state => (param: any) => `hello${param + state.count}`
  }
})
