import axios from "axios";

export default {
  state: () => ({
    posts: [],
  }),
  actions: {
    // Получение постов из БД
    // async users(ctx) {
    //   axios
    //     .post("/api/user", {
    //       name: "Aex",
    //       id: 100500,
    //     })
    //     .then(async (res) => {
    //       const msg = res.data;

    //       ctx.commit("ERROR", msg);
    //       console.log("Vuex user");
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //       ctx.commit("ERROR", error);
    //     });
    // },
    async getPosts(context) {
      axios
        .get("/api")
        .then(async (res) => {
          const postData = await res.data;
          await context.commit("GET", postData);
        })
        .catch(function(error) {
          console.log(error);
          context.commit("ERROR", error);
        });
    },
    // Создание нового поста
    NEW_POST: (ctx, payload) => {
      // console.log(payload.avatar);
      const formData = new FormData();

      for (const key in payload) {
        if (key === "avatar") {
          formData.append("avatar", payload.avatar);
        } else if (key === "image") {
          for (let i = 0; i < payload.image.length; i++) {
            const elem = payload.image[i];
            formData.append("images", elem);
          }
          formData.append("images", payload.image);
        } else {
          formData.append(key, payload[key]);
        }
      }
      axios
        .post("/api/create", formData)
        .then(function(res) {
          let msg = res.data;
          ctx.commit("ERROR", msg); // Отправляем сообщение о добавлении поста(error.js)
          ctx.commit("ACTION"); // Закрываем модальное окно(modal.js)
          ctx.dispatch("getPosts"); // обновляем функцию получения всех постов
        })
        .catch(function(error) {
          ctx.commit("ERROR", error);
        });
    },
    async likes(ctx, data) {
      axios
        .put("/api/like", data)
        .then(function() {
          ctx.dispatch("getPosts");
        })
        .catch(function(error) {
          ctx.commit("ERROR", error);
        });
    },
  },
  mutations: {
    // Получение постов из БД и добавление в state
    GET: (state, postData) => {
      state.posts = postData;
    },
  },
  getters: {
    // // Получение всех постов
    allPosts: (state) => {
      return state.posts;
    },
  },
};
