<template>
  <div id="app">
    <my-modal
      :isShow="isModalShow"
      @onClick="$store.dispatch('HIDE_MODAL', false)"
      ><post-form
    /></my-modal>
    <div class="app__inner">
      <v-header></v-header>
    </div>
    <div class="container-page">
      <router-view />
    </div>
    <my-error
      :message="error"
      width="300"
      position="bottom right"
      speed="99"
      duration="3000"
      @click="close"
    />
  </div>
</template>
<script>
import VHeader from "@/components/VHeader.vue";
import MyModal from "./components/ui/MyModal.vue";
import PostForm from "./components/PostForm.vue";
import MyError from "./components/ui/MyError.vue";
import { mapGetters } from "vuex";
export default {
  components: { VHeader, MyModal, PostForm, MyError },

  data() {
    return {
      isModal: "",
    };
  },
  updated() {
    console.log(this.error);
  },
  computed: {
    ...mapGetters(["isModalShow", "error"]),
  },

  methods: {
    close(index) {
      this.$store.dispatch("DELETE_MSG", index);
    },
  },
};
</script>

<style lang="scss">
.container-page {
  margin-left: 320px;
}
// .error-fade-enter-active .error-fade-move {
//   transition: all 600ms ease-in-out 50ms;
// }

// .error-fade-enter,
// .error-fade-leave-to {
//   opacity: 1;
//   transform: translateY(500px);
// }
</style>
