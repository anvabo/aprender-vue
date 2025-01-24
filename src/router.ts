import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "./views/Home.vue";

import Basico from "./views/introduccion/Basico.vue";
import Formulario from "./views/introduccion/Formulario.vue";
import Eventos from "./views/eventos/Eventos.vue";
import Componentes from "./views/componentes/Componentes.vue";

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

  {
    path: "/introduccion/formulario",
    name: "Formulario",
    component: Formulario,
  },
  {
    path: "/introduccion/eventos",
    name: "Eventos",
    component: Eventos,
  },
  {
    path: "/introduccion/componentes",
    name: "Componentes",
    component: Componentes,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
