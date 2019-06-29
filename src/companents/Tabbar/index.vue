<template>
  <div class="mz-tabbar">
    <ul class="mz-tabbar__ul">
      <li class="mz-tabbar__li" v-for="(tab,index) in tabs" :key="index">
        <router-link :to="tab.to" active-class="active">
          <!-- active-class 是router-link自带的属性， url匹配时会出现， -->
          <i class="iconfont" :class="tab.icon"></i>
          <span>{{tab.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  //{[]}
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang='scss'>
//引入scss文件路径
@import "../../assets/style/common/px2rem.scss";
@import "../../assets/style/common/mixin.scss";
.mz-tabbar {
  @include border-top; //引入公用样式
  @include border-bottom;
  height: px2rem(50);
  font-size: 24px;
  //设置边框线
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  &__ul {
    display: flex;
    height: 100%;
  }
  &__li {
    flex: 1;
    a {
      //文字和图标上下排列
      display: flex;
      flex-direction: column;
      //a标签垂直居中，父元素高度设置百分百
      height: 100%;
      justify-content: center;
      //
      text-decoration: none; //取消a标签下划线；
      align-items: center; //文字居中
      font-size: 12px;
      color: #797b82;
      .iconfont {
        font-size: 24px;
        margin-bottom: 4px;
      }
      &.active {
        color: orangered;
      }
    }
  }
}
</style>






