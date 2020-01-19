export const state = () => ({
  resume: null
});

export const mutations = {
  setMainData(state, mainData) {
    console.log("mainData store:", mainData);
    state.resume = mainData;
  }
};

export const actions = {
  async getMainData(store) {
    const mainData = await this.$axios.$get("https://www.nextcv.pl/resumes/1");
    store.commit("setMainData", mainData);
  }
};
