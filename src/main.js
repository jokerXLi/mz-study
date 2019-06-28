//入口
import Vue from "vue";
import router from "./router";
import store from './store'
import APP from "./APP";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(APP)
});
