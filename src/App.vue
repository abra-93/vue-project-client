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
    <my-error :visible="errorVisible.visible">
      <strong>ОШИБКА!!!</strong><br />
      {{ errorVisible.message }}</my-error
    >
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

  computed: {
    ...mapGetters(["isModalShow", "errorVisible"]),
    // isModalShow() {
    //   return this.$store.getters.isModalShow;
    // },
    // errorVisible() {
    //   console.log(this.$store.getters.errorVisible);
    //   return this.$store.getters.errorVisible;
    // },
  },

  methods: {
    hideModal() {
      console.log("HHHH");
    },
  },
};
</script>

<style lang="scss">
.container-page {
  margin-left: 320px;
}
</style>
