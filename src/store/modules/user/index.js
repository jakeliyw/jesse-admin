const state = {
  user: ''
}

const mutations = {
  userUpdate (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
