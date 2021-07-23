export default {
  state: {
    message: [],
  },
  mutations: {
    ERROR(state, payload) {
      state.message.push(payload);

      // удаляем элементы массива через некоторое время
      setTimeout(() => {
        state.message.shift();
      }, 5000);
    },
    DELETE(state, index) {
      state.message.splice(index, 1);
    },
  },
  actions: {
    ERROR_MODAL: ({ commit }, payload) => {
      commit("ERROR", payload);
    },
    DELETE_MSG: ({ commit }, index) => {
      commit("DELETE", index);
    },
  },
  getters: {
    error: ({ message }) => {
      return message;
    },
  },
};
