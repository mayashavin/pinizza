import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './stores'
import router from "./router/index.js";
import { setConfig } from 'cloudinary-build-url';

setConfig({
    cloudName: 'mayashavin',
})

createApp(App).use(router).use(pinia).mount('#app')
