import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import YourCart from "../views/YourCart.vue";
import NotFound from "../views/NotFound.vue";
import Checkout from "../views/Checkout.vue";
import Documentation from "../views/Documentation.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cart", name: "YourCart", component: YourCart },
  { path: "/checkout", name: "Checkout", component: Checkout },
  { path: "/steps", name: "Documentation", component: Documentation },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
