

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter} from "vue-router";
import Login from "./pages/Login.vue";
import Register from ".pages/Register.vue";

const routes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

const router = createRouter({ history: VueRouter.createWebHashHistory(), routes,});

createApp(App).use(router).mount('#app')
