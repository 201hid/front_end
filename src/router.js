import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import LoginComponent from "./components/Login.vue";
import RegisterComponent from "./components/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name:'home', component: HomeComponent,  props: true },
    { path: "/login", component: LoginComponent ,  props: true},
    { path: "/Register", component: RegisterComponent,  props: true }
  ]
});

export default router;
