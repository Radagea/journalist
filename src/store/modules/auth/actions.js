export default {
    login(context,payload) { 
        context.commit('setUser',payload);

        localStorage.setItem('token',payload.token);
        localStorage.setItem('expiresAt', payload.expiresAt);
    },
    tryLogin(context) {
        const token = localStorage.getItem('token');
        const expiresAt =  localStorage.getItem('expiresAt');

        const expiresIn = +new Date(expiresAt) - new Date().getTime(); 


        if(expiresIn < 0) {
            console.log('Login not success');
            return;
        }

        if (token) {
            context.commit('setUser', {
                token: token,
                expiresAt: expiresAt
            })
        }

    }
}