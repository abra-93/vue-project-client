import Vue from "vue";
import Vuex from "vuex";

import modal from "./modal";
import error from "./error";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    modal,
    error,
  },
});
