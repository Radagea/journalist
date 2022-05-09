import { createStore } from 'vuex';
import auth from './modules/auth/index.js';
import api from './modules/api.js';

const store = createStore({
    modules: {
        auth: auth,
        api: api
    }
});


export default store;