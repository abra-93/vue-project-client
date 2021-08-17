import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
// import socket from "./plugins/socket";
// import axios from "axios";

import "@/scss/index.scss"; // global style

Vue.config.productionTip = false;

// Vue.use(axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
