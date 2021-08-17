import axios from "axios";

export default {
  state: () => ({
    userID: "",
  }),
  mutations: {
    // Появление модельного окна (true)
    UserId(state, data) {
      state.userID = data.user;
    },
  },
  actions: {
    // Появление модельного окна (true)
    async users(ctx) {
      axios
        .post("/api/user", {
          name: "Misha",
          id: 100300,
        })
        .then(async (res) => {
          const data = res.data;
          localStorage.setItem("userId", data.user);
          ctx.commit("UserId", data);
          ctx.commit("ERROR", data);
        })
        .catch(function(error) {
          console.log(error);
          ctx.commit("ERROR", error);
        });
    },
  },
  getters: {},
};
