<template>
    <div class="container">
        blog
    </div>
</template>

<script>
export default {
    name : 'blog',
    //asyncData은 비동기로 데이터를 긁어온뒤에 페이지를 렌더링함...
    //기존 서버사이드 렌더링처럼 spa 대비 초기 화면 로드가 느리다는 단점이 있음.
    // async asyncData ({ params, error, query }) {//callback 인자를 활용할 수도 있음.
    //     console.log('params : ', params);
    //     console.log('query : ', query);
    //     const { data } = await axios.get('http://localhost:3000/api/users'); 
    //     const { dummy } = await new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve({
    //             dummy : {
    //                 dummyNumber : 1000,
    //                 dummyName : 'abcd',
    //             }
    //         })},1000)
    //     })

    //     if(!Array.isArray(data)){
    //         console.log('error 발생');
    //         error({
    //             statusCode: 404,
    //             message: '고의트롤ㅋ'
    //         });
    //     }

    //     return {
    //         user : Object.assign(dummy,data)
    //     }
    // },
    // async fetch ({ store, params, query }) {
        // const { data } = await axios.get('http://localhost:3000/api/users'); 
        // const data = [
        //     {'name' : 'csh'}
        // ]
        // console.log('params : ', params);
        // console.log('query : ', query);
        // store.commit('setUser', data)
        // store.commit('user/setUser', data)
        // store.commit('indexCounting')
    // },
    methods: {
    },
    head () {
        return {
            title: 's의 blog || s-store',
            meta: [
                { hid: 's-blog', name: 's-blog', content: 's의 간소화 blog' }
            ]
        }
    },
    // validate ({ params }) { //store
        // Must be a number
        // return /^\d+$/.test(params.id)
        // return true
        //return false //false를 반환하면 무조건 에러페이지
    // }
}
</script>

<style lang="scss">
@import "~assets/scss/variable.scss";
@import "~assets/scss/mixin.scss";

</style>

