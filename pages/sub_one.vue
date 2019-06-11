<template>
    <section class="container">
        <div>
            <app-logo/>
            <h1 class="title">
                nuxt-test
            </h1>
            <h2 class="subtitle">
                Nuxt.js project
            </h2>
            <div class="links">
                <a
                href="/"
                class="button--green">home</a>
                <a
                href="https://nuxtjs.org/"
                target="_blank"
                class="button--green">Documentation</a>
                <a
                href="https://github.com/nuxt/nuxt.js"
                target="_blank"
                class="button--grey">GitHub</a>
            </div>
            <div>
                {{user}}
            </div>
            <button v-on:click='getUser()'>비동기 테스트2</button>
        </div>
    </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios';

export default {
    //asyncData은 비동기로 데이터를 긁어온뒤에 페이지를 렌더링함...
    //기존 서버사이드 렌더링처럼 spa 대비 초기 화면 로드가 느리다는 단점이 있음.
    async asyncData ({ params, error }) {//callback 인자를 활용할 수도 있음.
        console.log('params : ', params);
        const { data } = await axios.get('http://localhost:4000/user'); 
        const { dummy } = await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({
                dummy : {
                    dummyNumber : 1000,
                    dummyName : 'abcd',
                }
                })
            },1000)
        })

        if(!Array.isArray(data)){
            console.log('error 발생');
            error({
                statusCode: 404,
                message: '고의트롤ㅋ'
            });
        }

        return {
            user : Object.assign(dummy,data)
        }
    },
    // async fetch ({ store, params }) {
    //   const { data } = await axios.get('http://localhost:4000/user'); 
    //   console.log('store : ', store);
    //   console.log('params : ', params);
    //   store.commit('setUsers', data)
    // },
    components: {
        AppLogo
    },
    methods: {
        async getUser(){
            const { data } = await axios.get('http://localhost:4000/user'); 
            console.log('getUser : ', data)
        }
    },
    head () {
        return {
            title: 'nuxt가 next보다 쉽다. 일단 문서대로 따라하면 이해되고 익힐 수 있다.',
            meta: [
                { hid: 'shit!!!!', name: '설명', content: '내가 커스텀한 설명' }
            ]
        }
    },
    layout (context) {
        return 'blog'
    },
    transition: {
        name: 'slide-left',
        mode: 'out-in'
    }
}
</script>

<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>

