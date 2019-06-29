<template>

  <div class="page-home">
    
    <router-view></router-view>
   
    <Tabbar
      :tabs="[
      {name:'电影',icon:'icondianying',to:'/films'},
      {name:'影院',icon:'iconyingyuan',to:'/cinemas'},
      {name:'特惠',icon:'iconyouhui',to:'/preferential'},
      {name:'我的',icon:'iconwode1',to:'/center'}
    ]"
    />

  </div>
  
</template>

<script>
import Tabbar from "../../companents/Tabbar/index.vue";
export default {
  name: "home",
  components: {
    Tabbar
  }
};
</script>

<style lang="scss">
  //上下布局
  .page-home{
    display: flex;
    flex-direction: column;
    height: 100%;
    >div:first-child{
      flex:1;
      overflow-y:auto; 
    }
    
  }
  
</style>