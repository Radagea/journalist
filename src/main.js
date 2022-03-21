import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router';


import NotFound from './components/pages/NotFound.vue';
import MainPage from './components/pages/MainPage.vue';
import SearchingPage from './components/pages/SearchingPage.vue';
import MainArticlePage from './components/pages/MainArticlePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {name: 'Main', path: '/', component: MainPage},
        {name: 'Searching', path: '/search', component: SearchingPage, props: true},
        {name: 'ArticlePage', path: '/article/:id', component: MainArticlePage, props: true},
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    scrollBehavior() {
        return { top: 0 };
    }
});


const app = createApp(App);
const apilink = 'http://develop.majsys.hu/journalistapi/api/';

app.config.globalProperties.$linkToAPI = apilink;
app.use(router);
app.mount('#app');











