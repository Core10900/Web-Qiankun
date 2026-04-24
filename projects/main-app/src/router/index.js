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
  // {
  //   path: '/vue2',
  //   name: 'Vue2',
  //   component: () => import('../views/Vue2.vue'),
  // },
  {
    path: "/vue3",
    name: "Vue3",
    component: () => import("../views/Vue3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
