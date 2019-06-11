//class mode store 사용방법
// import Vuex from 'vuex'

// const store = () => new Vuex.Store({
//   state: {
//     user: '홍길동'
//   },
//   mutations: {
//     setUser (state, user) {
//       console.log('state : ', state);
//       console.log('user : ', user);
//     }
//   }
// })

// export default store

//module mode store 사용방법
export const state = () => ({
  mode : 'story',
  position : null,
  wsize : null
})

export const getters = {
  mode(state){
    return state.mode
  },
  position(state){
    return state.position
  },
  wsize(state){
    return state.wsize
  },
}

export const mutations = {
  setMode(state, payload){
    state.mode = payload
  },
  setPosition(state, payload){
    state.position = payload
  },
  setWsize(state, payload){
    state.wsize = payload
  },
}

