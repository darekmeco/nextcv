export default ({ store, app: { $axios } }) => {
  console.log("auth plugin");
  const auth = localStorage.getItem("auth");
  if (auth) {
    console.log("auth:", auth);
    store.commit("auth/setAuthState", JSON.parse(auth));
    // $axios.setToken(store.state.token);
  }
};
