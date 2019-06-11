<template>
  <div class="StoryDialog" v-if="mode=='story'">
    <div class="text-bar">{{storyText}}</div>
    <button @click="readStory()" class="btn_read" v-if="isSpeaking" ><i class="far fa-comment-dots" ></i></button>
    <button @click="nextStory(story.next)" class="btn_next" v-if="!isSpeaking && story.type == 'story' && story.next"><i class="far fa-comment" ></i></button>
    <button @click="setAnswerDisplay(true)" class="btn_answer" v-if="!isSpeaking && story.type == 'question' && story.answers"><i class="far fa-comments" ></i></button>
    <button @click="$emit('modeChange', 'menu')" class="btn_menu" v-if="!isSpeaking && story.type == 'end'"><i class="far fa-comment" ></i></button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'StoryDialog',
  props : [
    'mode'
  ],
  mounted(){
    this.setStory('hello');
  },
  data(){
    return {
      storyText : '안녕? S의 개인블로그에 온 걸 환영해',
    }
  },
  watch: {
    story(){
      this.speakStory();
    }
  },
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
    speakStory(){
      const {type, text} = this.story;
      const textArr = text.split('');
      let running = null;

      this.setIsSpeaking(true);
      this.storyText = '';
      
      const doSpeak = ()=>{
        if(textArr.length && this.isSpeaking){
          this.storyText+=textArr.shift();
          running = setTimeout(doSpeak, 50);
        } else {
          clearTimeout(running); 
          this.setIsSpeaking(false);
        }
      }
      doSpeak();
    },
    readStory(){
      const {text} = this.story;
      this.setIsSpeaking(false);
      this.storyText = text;
    },
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
.StoryDialog {
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-360px);
    width:615px;
    box-sizing:border-box;
    padding:25px 100px 25px 25px;
    background:#fff2dc;
    border-radius: 30px;
    border:5px solid #000;
    z-index:7;
    &:before {
        content:'';
        position:fixed;
        bottom: -31px;
        left: 130px;
        width:50px;
        height:50px;
        transform:rotate(45deg);
        background:#fff2dc;
        border-right:5px solid #000;
        border-bottom:5px solid #000;
    }
    .text-bar {
        position: relative;
        z-index: inherit;
        font-size:40px;
        line-height:1.2;
        min-height:96px;
    }
    > button {
        position:absolute;
        top:50%;
        right:10px;
        transform:translate(0, -50%);
        background:transparent;
        font-size:50px;
        border:none;
        outline:0;
        cursor:pointer;
        &.btn_read {
            > i {
                color:$ryanColor;
            }
            &:after {
                content: 'click!';
                color:$ryanColor;
                position: absolute;
                right: 12px;
                top: -15px;
                font-size: 20px;
                transform:rotate(-8deg);
                animation:light 0.5s infinite alternate;
            }
        }
        &.btn_next {
            > i {
                color:green;
            }
            &:after {
                content: 'click!';
                color:green;
                position: absolute;
                right: 12px;
                top: -15px;
                font-size: 20px;
                transform:rotate(-8deg);
                animation:light 0.5s infinite alternate;
            }
        }
        &.btn_answer {
            > i {
                color:green;
            }
            &:after {
                content: 'click!';
                color:green;
                position: absolute;
                right: 12px;
                top: -15px;
                font-size: 20px;
                transform:rotate(-8deg);
                animation:light 0.5s infinite alternate;
            }
        }
        &.btn_menu {
            > i {
                color:black;
            }
            &:after {
                content: 'click!';
                color:black;
                position: absolute;
                right: 12px;
                top: -15px;
                font-size: 20px;
                transform:rotate(-8deg);
                animation:light 0.5s infinite alternate;
            }
        }
    }
}

@keyframes light {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>