import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// 持久化存储数据
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  plugins: [createPersistedState()]
})
