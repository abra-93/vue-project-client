import Vue from "vue";
import Vuex from "vuex";

import modal from "./modal";
import error from "./error";
import posts from "./posts";
import user from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    posts,
    modal,
    error,
    user,
  },
});
