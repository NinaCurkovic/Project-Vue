import { createApp } from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import router from './router'

const app = createApp(App)
library.add(fas);
app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')