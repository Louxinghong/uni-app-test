export default {
  namespaced: true,
  state: {
    username: '',
    password: '',
    isLogin: false
  },
  getters: {
    getUserName(state) {
      return state.username
    },
    getPassWord(state) {
      return state.password
    },
    getLoginStatus(state) {
      return state.isLogin
    }
  },
  mutations: {
    GET_USERNAME(state, username) {
      console.log(state.username)
      state.username = username
      console.log(state.username)
    },
    GET_USERPASSWORD(state, password) {
      state.password = password
    },
    CHANGE_LOGINSTATUS(state) {
      console.log(state.isLogin)
      state.isLogin = true
      console.log(state.isLogin)
    }
  },
  actions: {
    getUserName({commit}, {username}) {
      commit('GET_USERNAME', username)
    },
    getPassWord({commit}, {password}) {
      commit('GET_USERPASSWORD', password)
    },
    changeLoginStatus({commit}) {
      commit('CHANGE_LOGINSTATUS')
    }
  }
}