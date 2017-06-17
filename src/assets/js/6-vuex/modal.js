const state = {
  isModalOpen: false,
  elModal: null
}

const mutations = {
  closeModal (state) {
    state.elModal = null
    state.isModalOpen = false
  },

  openModal (state) {
    state.isModalOpen = true
  },

  elLogin () {
    state.elModal = 'form-login'
  },

  elRegister () {
    state.elModal = 'form-register'
  },

  elPrew () {
    state.elModal = 'form-prew'
  },
}

const getters = {
  isModalOpen (state) {
    return state.isModalOpen
  },

  elModal (state) {
    return state.elModal
  }
}

const actions = {
  closeModal ({commit}) {
    commit('closeModal')
  },

  openModal ({commit}) {
    commit('openModal')
  },

  elLogin ({commit}) {
    commit('elLogin')
  },
  
  elRegister ({commit}) {
    commit('elRegister')
  },

  elPrew ({commit}) {
    commit('elPrew')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
