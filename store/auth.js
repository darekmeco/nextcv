export const state = () => ({
  loggedIn: false,
  jwt: null
});

export const mutations = {
  setAuthState(state, { jwt, user }) {
    state.loggedIn = true;
    state.jwt = jwt;
  },
  async removeAuthState(state) {
    console.log(2);
    state.loggedIn = false;
    state.jwt = null;
    await localStorage.clear();
    console.log(3);
  }
};
