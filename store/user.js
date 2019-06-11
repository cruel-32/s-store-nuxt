export const state = () => ({
  loggedUser : null
})

export const getters = {
  getLoggedUser(state){
    return state.loggedUser
  }
}

export const mutations = {
  setLoggedUser (state, payload) {
    state.loggedUser = payload;
  }
}