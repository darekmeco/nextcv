export const state = () => ({
  resume: null
});

export const mutations = {
  setMainData(state, mainData) {
    state.resume = mainData;
  }
};

export const actions = {
  async getMainData(store) {
    console.log("apiUrl", process.env.apiUrl);
    const mainData = await this.$axios.$get(process.env.apiUrl + "/resumes/1");
    store.commit("setMainData", mainData);
  }
};
