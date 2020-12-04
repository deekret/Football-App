import { createRouter, createWebHistory } from "vue-router";
import Teams from "../views/Teams.vue";
import About from "../views/About.vue";

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
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
