export default {
    setUser(state,payload) {
        state.token = payload.token;
        state.expiresAt = payload.expiresAt;
    }
}