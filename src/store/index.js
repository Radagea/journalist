import { createStore } from 'vuex';
import auth from './modules/auth/index.js';
import api from './modules/api.js';
import openArticlePopup from './modules/openArticlePopup/index.js';

const store = createStore({
    modules: {
        auth: auth,
        api: api,
        openArticlePopup: openArticlePopup
    }
});


export default store;