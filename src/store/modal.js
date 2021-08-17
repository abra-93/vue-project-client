export default {
  state: {
    isShow: false,
  },
  mutations: {
    // Появление модельного окна (true)
    ACTION(state) {
      state.isShow = !state.isShow;
    },
  },
  actions: {
    // Появление модельного окна (true)
    modal: (ctx) => {
      ctx.commit("ACTION");
    },
  },
  getters: {
    // Появление/исчезновение модального окна
    isModalShow: (state) => {
      return state.isShow;
    },
  },
};
