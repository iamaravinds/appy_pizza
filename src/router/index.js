import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue } from 'bootstrap-vue';
import Orders from '../views/Orders.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  {
    path: '/',
    name: 'Orders',
    component: Orders,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
