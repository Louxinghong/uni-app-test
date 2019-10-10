export default {
  namespaced: true,
  state: {
    playingMusic: {},
    changeMusicNums: 0
  },
  getters: {
    getPlayingMusic(state) {
      return state.playingMusic
    },
    getIsChangeMusic(state) {
      return state.changeMusicNums
    }
  },
  mutations: {
    CHANGEPLAYINGMUSIC(state, data) {
      state.playingMusic = data
    },
    CHANGEPLAYINGSTATUS(state) {
      state.changeMusicNums++
    }
  },
  actions: {
    changeMusic({ commit }, { data }) {
      commit('CHANGEPLAYINGMUSIC', data)
    },
    changeStatus({ commit }) {
      commit('CHANGEPLAYINGSTATUS')
    }
  }
}
