import { createRouter, createWebHistory } from "vue-router";
import TeamList from "../views/TeamList.vue";
import Games from "../views/Games.vue";

const routes = [
  {
    path: "/",
    name: "TeamList",
    component: TeamList,
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
