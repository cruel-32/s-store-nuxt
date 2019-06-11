<template>
    <div class="menu_icons_wrap" @mousemove="onMouseMove" @mouseleave="onMouseLeave">

        <router-link tag="a" to="/profile" class="btn-default btn-profile">
            <i class="far fa-address-card"></i>
        </router-link>

        <router-link tag="a" to="/works" class="btn-default btn-source">
            <i class="fas fa-database"></i>
        </router-link>
       
        <router-link tag="a" to="/blog" class="btn-default btn-code">
            <i class="fas fa-file-code"></i>
        </router-link>
       
        <a href="https://github.com/cruel-32" class="btn-default btn-github" target="_blank">
            <i class="fab fa-github"></i>
        </a>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name : 'MenuIconsWrap',
    computed: {
        ...mapGetters({
            position : 'position',
        }),
    },
    methods : {
        ...mapMutations({
            setPosition: 'setPosition',
        }),
        onMouseMove(e){
            const {x,y} = e;
            this.setPosition({
                x,y
            })
        },
        onMouseLeave(e){
            this.setPosition(null)
        }
    }
}
</script>
<style lang="scss">
@import "~assets/scss/variable.scss";
@import "~assets/scss/mixin.scss";
.menu_icons_wrap {
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    max-width:730px;
    width:80%;
    height:60%;
    z-index:7;
    perspective: 1000px;
    .btn-default {
        position: absolute;;
        background:#fff;
        padding:15px;
        box-sizing:border-box;
        border:5px solid #000;
        border-radius:15px;
        z-index:7;
        transition:all 0.2s;
        width:175px;
        min-height:150px;
        text-align: center;
        cursor:pointer;
        i {
            font-size:10rem;
        }
        &.btn-profile {
            left:0;
            top:0;
            color:#76a3f8;
            transform:scale(0.9);
            transform-origin: 50% 50%;
        }
        &.btn-source {
            right:0;
            top:0;
            color:#91d18c;
            transform:scale(0.9);
            transform-origin: 50% 50%;
        }
        &.btn-code {
            left:0;
            bottom:0;
            color:#ba9527;
            transform:scale(0.9);
            transform-origin: 50% 50%;
        }
        &.btn-github {
            right:0;
            bottom:0;
            color:#ec3f3f;
            transform:scale(0.9);
            transform-origin: 50% 50%;
        }
        &:hover {
            transform:scale(1.1);
        }
    }
}
</style>