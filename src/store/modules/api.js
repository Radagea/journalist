export default {
    namespaced: true,
    state() {
        return {
            apiLink: 'http://develop.majsys.hu/journalistapi'
        };
    },
    mutations: {
        
    },
    actions: {

    },
    getters: {
        apiLink(state) {
            return state.apiLink+'/api/';
        },
        authLink(state) {
            return state.apiLink+'/auth/';
        },
        registLink(state) {
            return state.apiLink+'/auth/register.php'
        },
        userDataLink(state,_,_1,rootGetters) {
            return state.apiLink+'/auth/getUserData.php'+'?token='+rootGetters['auth/getToken'];
        }
    }
}