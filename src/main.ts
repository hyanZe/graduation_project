import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from "./store";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(pinia)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
