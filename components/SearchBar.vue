<template>
  <div class="search-bar">
    <form @submit.prevent="search">
      <input class="inp-search" type="text"  v-model="keyword" placeholder="검색어를 입력하세요" />
      <button class="btn-remove" type="button" v-show="keyword" @click="removeKeyword"><i class="far fa-times-circle"></i></button>
      <button class="btn-search" type="submit" ><i class="fas fa-search"></i></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data(){
    return {
      keyword : ''
    }
  },
  methods : {
    search(){
      console.log('아직 미구현입니다');
    },
    removeKeyword(){
      this.keyword = '';
    }
  }
}
</script>
<style scoped lang="scss">
.search-bar {
  position: relative;
  border-bottom:1px solid #eaeaea;
  .inp-search {
    background: transparent;
    border: 0;
    outline: 0;
    color:#fff;
  }
  .btn-remove {
    background: transparent;
    border: 0;
    color:#fff;
    cursor:pointer;
    padding:0;
    font-size:12px;
    position: absolute;
    right:24px;
    top:2px;
  }
  .btn-search {
    background: transparent;
    border: 0;
    color:#fff;
    cursor:pointer;
    padding:0;
    font-size:16px;
    float:right;
  }
}
</style>

