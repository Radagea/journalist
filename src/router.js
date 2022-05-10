import { createRouter,createWebHistory } from 'vue-router';


import NotFound from './components/pages/NotFound.vue';
import MainPage from './components/pages/MainPage.vue';
import SearchingPage from './components/pages/SearchingPage.vue';
import MainArticlePage from './components/pages/MainArticlePage.vue';
import JournalsPage from './components/pages/JournalsPage.vue';
import JournalProfile from './components/UI/cards/journals/JournalProfile.vue';
import UserProfile from './components/pages/UserProfile.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {name: 'Main', path: '/', component: MainPage},
        {name: 'Searching', path: '/search', component: SearchingPage, props: true},
        {name: 'ArticlePage', path: '/article/:id', component: MainArticlePage},
        {name: 'Journals', path: '/journals', component: JournalsPage,},
        {name: 'JournalProfile', path: '/journals/:id', component: JournalProfile},
        {name: 'MyProfile', path: '/myprofile', component: UserProfile },
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    scrollBehavior() {
        return { top: 0 };
    }
});

// router.beforeEach(function(to,_,next) { //Navigation guard!

// })
export default router;