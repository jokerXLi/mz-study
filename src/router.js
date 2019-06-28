import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/", //一级路由（跳转时整个页面更换），多个一级路由用逗号隔开{path...},{path...},
      component: () => import("./views/home/index.vue"), //首页地址
      children: [
        { path: "films", component: () => import("./views/home/films.vue") },
        {
          path: "cinemas",
          component: () => import("./views/home/cinemas.vue")
        },
        { path: "center", component: () => import("./views/home/center.vue") },
        {
          //默认去的地址
          path: "*",
          redirect: "/films"
        }
      ]
    },
    {
      path: "/film/:filmId",
      component: () => import("./views/film/index.vue") //一级路由
    },
    {
      path: "/city",
      component: () => import("./views/city/index.vue") //一级路由
    },
  
  ]
});
