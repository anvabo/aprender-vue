import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import Basico from "./views/introduccion/Basico.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/introduccion/basico",
    name: "Basico",
    component: Basico,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
