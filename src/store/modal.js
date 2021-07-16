export default {
  state: {
    isShow: false,
    post: [],
  },
  mutations: {
    ACTION(state, payload) {
      state.isShow = payload;
    },
    HIDE(state, payload) {
      state.isShow = payload;
    },
    POST(state, payload) {
      state.post.push(payload);
      state.isShow = false;
    },
  },
  actions: {
    ACTION_MODAL: (context, payload) => {
      context.commit("ACTION", payload);
    },
    HIDE_MODAL: (context, payload) => {
      context.commit("HIDE", payload);
    },
    NEW_POST: (context, payload) => {
      context.commit("POST", payload);
    },
  },
  getters: {
    isModalShow: (state) => {
      return state.isShow;
    },
    newPost: (state) => {
      return state.post;
    },
  },
};
