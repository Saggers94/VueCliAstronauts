import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Astronauts from "../views/Astronauts.vue";
import DetailAstronaut from "../views/DetailAstronaut.vue";
import Contact from "../views/Contact.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/astronauts",
    name: "Astronauts",
    component: Astronauts,
  },
  {
    path: "/astronauts/:id",
    name: "DetailAstronauts",
    component: DetailAstronaut,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
