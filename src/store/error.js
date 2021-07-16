export default {
  state: {
    visible: false,
    message: "",
  },
  mutations: {
    ERROR(state, payload) {
      state.message = payload;
      state.visible = true;
      setTimeout(() => {
        state.visible = false;
      }, 2000);
    },
  },
  actions: {
    ERROR_MODAL: (context, payload) => {
      context.commit("ERROR", payload);
    },
  },
  getters: {
    errorVisible: (state) => {
      return state;
    },
  },
};
