// import axios from 'axios';
const stories = require('../story/stories');

export const state = () => ({
  story : stories.hello,
  isSpeaking : false,
  answerDisplay : false,
})


export const getters = {
  isSpeaking(state){
    return state.isSpeaking
  },
  story(state){
    return state.story
  },
  answerDisplay(state){
    return state.answerDisplay
  }
}

export const mutations = {
  setStory(state, payload){
    state.story = stories[payload];
  },
  setIsSpeaking(state, payload){
    state.isSpeaking = payload;
  },
  setAnswerDisplay(state, payload){
    state.answerDisplay = payload;
  },
}

// export const actions = {
//   async testUser({commit,state},payload){
//     console.log('state : ', state);
//     console.log('payload : ', payload);
//     const {data} = await axios.get('http://localhost:7000/api/users');
//     console.log('data : ', data);
//     commit('setStoryName',payload)
//   },
// }