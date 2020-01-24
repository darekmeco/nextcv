export default ({ store, app: { $axios } }) => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    store.commit("auth/setAuthState", JSON.parse(auth));
  }
};
