// import Router from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/SysHome.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/VueAbout.vue"),
  },
  {
    path: "/info",
    component: () => import("../views/SysInfo.vue"),
  },
];

export default routes;
