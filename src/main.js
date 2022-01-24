import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './stores'
import router from "./router/index.js";
import { makePaymentPlugin } from '../plugins/makePayment';

pinia.use(makePaymentPlugin)

createApp(App).use(router).use(pinia).mount('#app')
