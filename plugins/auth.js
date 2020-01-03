export default ({ store, app: { $axios } }) => {
  console.log("auth plugin");
  const auth = localStorage.getItem("auth");
  if (auth) {
    console.log(auth);
    store.commit("auth/setAuthState", auth);
    // $axios.setToken(store.state.token);
  }
};
