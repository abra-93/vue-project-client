export default {
  state: {
    message: [],
    visible: false,
  },
  mutations: {
    ERROR(state, payload) {
      state.message.push(payload);
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
      console.log(state);
      return state;
    },
  },
};
