import { createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/info",
    component: () => import("../views/Info.vue"),
  },
];

const base = qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue3-vite-app" : "/";

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
