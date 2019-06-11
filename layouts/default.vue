<template>
  <div class="wrap">
    <div class="top_menu">
      <div class="left_box">
        <router-link tag="a" to="/">
          <i class="fas fa-home"></i>
        </router-link>
        <router-link tag="a" to="/" class="link-home">
          <h1 class="title">S-STORE</h1>
        </router-link>

        <nav class="navi">
          <router-link tag="a" to="/profile" v-bind:class="{link:true, on : $route.name == 'profile'}">profile</router-link>
          <router-link tag="a" to="/works" v-bind:class="{link:true, on : $route.name == 'works'}">works</router-link>
          <router-link tag="a" to="/blog" v-bind:class="{link:true, on : $route.name == 'blog'}">blog</router-link>
          <a href="https://github.com/cruel-32" class="link" target="_blank">github</a>
        </nav>
      </div>
      <div  class="right_box">
          <SearchBar />
          <!-- <template>
            <button>join</button>
            <button>login</button>
          </template> -->
      </div>
    </div>
    <nuxt />
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import SearchBar from '~/components/SearchBar.vue'
import {debounce} from 'lodash'


export default {
  name : 'defaultLayout',
  components: {
      SearchBar
  },
  computed: {
    ...mapGetters({
      wsize : 'wsize',
    }),
  },
  mounted(){
    if(window){
      window.addEventListener('resize', debounce(this.handleResize, 1000));

      this.$route.name

    }
  },
  methods : {
    ...mapMutations({
      setWsize: 'setWsize',
    }),
    handleResize(e){
      const {innerWidth, innerHeight} = e.target;
      this.setWsize({
        w : innerWidth,
        h : innerHeight,
      })
    }
  }
}
</script>
<style lang="scss" >
@import "~assets/scss/variable.scss";
@import "~assets/scss/mixin.scss";
.wrap {
  .top_menu {
    position: relative;
    z-index:10;
    background-color:#000;
    height:34px;
    padding:6px 10px;
    box-sizing: border-box;
    .left_box {
      float: left;
      .fa-home {
        color:#fff;
        font-size:16px;
        vertical-align: bottom;
      }
      .link-home {
        text-decoration : none;
        .title {
          display:inline-block;
          font-size:14px;
          color:#fff;
        }
      }
      .navi {
        margin-left:20px;
        display:inline-block;
        .link {
          position: relative;
          color:#fff;
          padding:0 10px;
          font-size:14px;
          &:hover {
            text-decoration: none;
            color:$ryanColor;
          }
          &.on {
            color:$ryanColor;
          }
          &:first-child {
            &::before {
              display:none;
            }
          }
          &:before {
            content:'';
            position:absolute;
            width:1px;
            height:8px;
            left:0;
            top:50%;
            margin-top:-3px;
            background: #fff;
          }
        }
      }
    }
    .right_box {
      float: right;
    }
    &:after {
      content:'';
      display:block;
      clear: both;
    }
  }
}
</style>

