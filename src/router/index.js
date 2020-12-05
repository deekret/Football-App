import { createRouter, createWebHistory } from "vue-router";
import Teams from "../views/Teams.vue";
import Games from "../views/Games.vue";

const routes = [
  {
    path: "/",
    name: "Teams",
    component: Teams,
  },
  {
    path: "/games",
    name: "games",
    params: "year",
    // route level code-splitting
    component: Games,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
