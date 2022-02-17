import { createApp } from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import router from './router'
import axios from 'axios';
import i18n from './i18n';

const lang = localStorage.getItem('lang') || "en";
axios.defaults.baseURL = 'http//localhost:5000/';
axios.defaults.headers['Accept-Language'] = lang;

const app = createApp(App).use(i18n)
library.add(fas);
app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')