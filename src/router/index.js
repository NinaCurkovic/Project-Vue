import {createWebHistory, createRouter} from "vue-router";

import Filter from '../components/Filter.vue';
import Footer from '../components/Footer.vue';
import Cart from '../components/Cart.vue';
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue';
import Help from '../views/Help.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/filter',
        name: 'Filter',
        component: Filter,
    },
    {
        path: '/footer',
        name: 'Footer',
        component: Footer,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/help',
        name: 'Help',
        component: Help,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;