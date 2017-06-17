
import modal from './modal.js';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modal
  },


  // strict: process.env.NODE_ENV !== 'production'
});