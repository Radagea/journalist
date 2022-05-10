
export default {
    namespaced: true,
    state() {
        return {
            popUp: false,
            data: null
        };
    },
    mutations: {
        setPopup(state,payload) {
            state.popUp = true;
            state.data = payload;
        },
        nullPopup(state) {
            state.popUp = false;
            state.data = null;
        }
    },
    actions: {
        openPopUp(context,payload) {
            context.commit('setPopup',payload);
        },
        closePopUp(context) {
            context.commit('nullPopup');
        }
    },
    getters: {
        isPopUp(state) {
            return state.popUp;
        },
        getId(state) {
            return state.data;
        }
    }
}