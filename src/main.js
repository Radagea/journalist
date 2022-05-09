import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js';
import TheLoader from './components/UI/elements/TheLoader.vue';

const app = createApp(App);
const apilink = 'http://develop.majsys.hu/journalistapi/api/';

app.config.globalProperties.$userToken = null;
app.config.globalProperties.$linkToAPI = apilink;

app.use(router);
app.use(store);

app.component('the-loader',TheLoader);

app.mount('#app');











