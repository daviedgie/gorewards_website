import Vue from "vue";
import VueRouter from "vue-router";
import LadingPage from "../views/LadingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LadingPage",
    component: LadingPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
