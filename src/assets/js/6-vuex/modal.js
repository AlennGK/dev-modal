const state = {
  isModalOpen: true
};

const mutations = {
  closeModal (state) {
    state.isModalOpen = false;
  },

  openModal (state) {
    state.isModalOpen = true;
  }
};

const getters = {
  isModalOpen (state) {
    return state.isModalOpen;
  }
};

const actions = {
  closeModal ({commit}) {
    commit('closeModal');
  },

  openModal ({commit}) {
    commit('openModal');
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
