<template>
  <div class="AnswerDialog" v-if="mode=='story' && story && !isSpeaking && story.type == 'question' && answerDisplay">
    <div class="back">
      <button class="btns" type="button" v-for="(answer, index) in story.answers" v-bind:key="index"
        @click="nextStory(answer.next)">
        {{answer.text}}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name : 'AnswerDialog',
  props : [
    'mode',
  ],
  computed: {
    ...mapGetters({
      story : 'story/story',
      isSpeaking : 'story/isSpeaking',
      answerDisplay : 'story/answerDisplay',
    }),
  },
  methods : {
    ...mapMutations({
      setStory: 'story/setStory',
      setIsSpeaking: 'story/setIsSpeaking',
      setAnswerDisplay: 'story/setAnswerDisplay',
    }),
    nextStory(next){
      this.setAnswerDisplay(false);
      this.setStory(next);
    },
  }
}
</script>
<style lang="scss">
@import "~assets/scss/variable.scss";
@import "~assets/scss/mixin.scss";
.AnswerDialog {
    position:fixed;
    top:50%;
    left:0;
    right:0;
    transform:translate(0, -50%);
    z-index:8;
    background:rgba(0,0,0,0.8);
    .back {
        width:800px;
        margin:50px auto;
        text-align: center;
        .btns {
            width:350px;
            margin:10px;
            color: #fff;
            box-sizing: border-box;
            // background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#aaa), 0.5);
            background: transparent;
            border-radius: 20px;
            font-size:30px;
            padding:25px;
            cursor:pointer;
            &:hover {
                background: $ryanColor;
            }
        }
    }
}
</style>