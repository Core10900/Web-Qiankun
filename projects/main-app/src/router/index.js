import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/vue2-app",
    name: "Vue2App",
    component: () => import("../views/MicroAppView.vue"),
  },
  {
    path: "/vue3-vite-app",
    name: "Vue3ViteApp",
    component: () => import("../views/MicroAppView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
