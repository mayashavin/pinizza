import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import YourCart from "../views/YourCart.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cart", name: "YourCart", component: YourCart },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
