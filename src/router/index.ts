import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:username",
    name: "MemberDetail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/MemberDetailPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
