import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import music from './modules/music'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    music
  }
})
