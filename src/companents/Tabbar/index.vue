<template>
  <div class="mz-tabbar">
    <ul class="mz-tabbar__ul">
      <li class="mz-tabbar__li">
        <i>图标</i>
        <span>文字</span>
      </li>
      <li class="mz-tabbar__li">
        <i>图标</i>
        <span>文字</span>
      </li>
      <li class="mz-tabbar__li">
        <i>图标</i>
        <span>文字</span>
      </li>
      <li class="mz-tabbar__li">
        <i>图标</i>
        <span>文字</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mzTabbar"
};
</script>

<style lang='scss'>
@import "../../assets/style/common/px2rem.scss";
.mz-tabbar {
  height: px2rem(50);
}
</style>






