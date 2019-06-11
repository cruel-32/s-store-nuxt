<template>
    <div class="container ryan">
        <div class="cloud1"></div>
        <div class="cloud2"></div>
        <div class="cloud3"></div>
        <div class="cloud4"></div>
        <div class="cloud5"></div>
        <Ryan @modeChange="modeChange" :mode="mode" />
        <StoryDialog @modeChange="modeChange" :mode="mode" />
        <AnswerDialog @modeChange="modeChange" :mode="mode" />
        <MenuIconsWrap @modeChange="modeChange" :mode="mode" v-if="mode=='menu'" />
        <button v-if="mode=='menu'" @click="modeChange('story')">라이언과 대화하기</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Ryan from '../components/Ryan/Ryan.vue'
import StoryDialog from '../components/StoryDialog.vue'
import AnswerDialog from '../components/AnswerDialog.vue'
import MenuIconsWrap from '../components/MenuIconsWrap.vue'
export default {
  // async asyncData ({ params, query, error }) {
  // },
  components: {
    Ryan,StoryDialog,AnswerDialog, MenuIconsWrap,
  },
  mounted(){
    this.setMode('story');
  },
  computed: {
    ...mapGetters({
      getLoggedUser : 'user/getLoggedUser',
      mode : 'mode',
    }),
  },
  methods : {
    ...mapMutations({
      setLoggedUser: 'user/setLoggedUser',
      setMode: 'setMode',
      setStory: 'story/setStory',
    }),
    modeChange(mode){
      if(mode == 'story'){
        this.setStory('hello');
      }
      this.setMode(mode);
    }
  },
  head () {
    return {
        title: 's-store',
        meta: [
            { hid: 's-store-main', name: 's-store-main', content: 's-store 메인' }
        ]
    }
},
}
</script>

<style lang="scss">
@import "~assets/scss/variable.scss";
@import "~assets/scss/mixin.scss";
.test {
    position:fixed;
    top:100px;
    left:100px;
    z-index: 10;
}
.container {
    background-color: #fff;
    &.ryan {
        background-color: $bgColor;
        position: fixed;
        z-index:5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:url(~assets/images/back.png) center top;
        background-size:cover;
    }
}
.cloud1 {
    position: fixed;
    left: 0px;
    top:-160px;
    z-index:5;
    width: 583px;
    height:302px;
    background: url(~assets/images/cloud1.png) no-repeat;
    animation:move1 90s infinite alternate;
}

.cloud2 {
    position: fixed;
    left: 0px;
    top:-30px;
    z-index:5;
    width: 291px;
    height:174px;
    background: url(~assets/images/cloud2.png) no-repeat;
    animation:move2 80s infinite alternate;
}

.cloud3 {
    position: fixed;
    left: 0px;
    top:90px;
    z-index:5;
    width: 118px;
    height:64px;
    background: url(~assets/images/cloud3.png) no-repeat;
    animation:move3 100s infinite alternate;
}

.cloud4 {
    position: fixed;
    left: 0px;
    top:-220px;
    z-index:5;
    width: 583px;
    height:302px;
    background: url(~assets/images/cloud1.png) no-repeat;
    animation:move4 180s infinite alternate;
}

.cloud5 {
    position: fixed;
    left: 0px;
    top:-90px;
    z-index:5;
    width: 291px;
    height:174px;
    background: url(~assets/images/cloud2.png) no-repeat;
    animation:move5 160s infinite alternate;
}

@keyframes move1 {
    from {
        left:150%
    }
    to {
        left:-30%;
    }
}

@keyframes move2 {
    from {
        left:50%;
    }
    50% {
        left:150%;
    }
    to {
        left:-60%;
    }
}

@keyframes move3 {
    from {
        left:-10%;
    }
    50% {
        left:100%;
    }
    to {
        left:-30%;
    }
}

@keyframes move4 {
    from {
        left:150%
    }
    50% {
        left:-50%;
    }
    to {
        left:150%;
    }
}

@keyframes move5 {
    from {
        left:-10%;
    }
    50% {
        left:100%;
    }
    to {
        left:-30%;
    }
}
</style>

