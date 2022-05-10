export default {
    getUser(state) {
        console.log(state.userId);
        console.log(state.token);
        console.log(state.expiresAt);
        console.log(state.email);
    }
}