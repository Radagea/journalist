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
        }
    }
}