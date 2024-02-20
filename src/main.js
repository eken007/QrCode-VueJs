import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import i18n from './locales/i18n'
import VueAxios from 'vue-axios'
import axios from 'axios'
import store from "./store/store"
import router from './MesRoutes/routes'
import Echo from "laravel-echo"

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "219a1f8debafbc8a8e08",
    wsHost:store.state.host,
    wsPort: 6001,
    cluster: "mt1",
    forceTLS: false,
    disableStats: true,
    authEndpoint :store.state.api + 'broadcasting/auth',
    auth:{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`, 
        }
    },
});

createApp(App).use(i18n).use(router).use(store).use(VueAxios, axios).mount('#app')
