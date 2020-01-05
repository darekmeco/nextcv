export const state = () => ({
  loggedIn: false,
  jwt: null
});

export const mutations = {
  setAuthState(state, { jwt, user }) {
    state.loggedIn = true;
    state.jwt = jwt;
    this.$axios.setToken(jwt, "Bearer");
    console.log("set token", state.jwt);
  },
  async removeAuthState(state) {
    state.loggedIn = false;
    state.jwt = null;
    await localStorage.clear();
    this.$axios.setToken(false);
  }
};
