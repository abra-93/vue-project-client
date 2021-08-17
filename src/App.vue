<template>
  <div id="app">
    <my-modal :isShow="isModalShow" @onClick="hideModal"
      ><post-form
    /></my-modal>
    <div class="app__inner">
      <!-- <v-header></v-header> -->
    </div>
    <div class="container-page">
      <router-view />
    </div>
    <my-error
      :message="error"
      width="300"
      position="bottom right"
      @click="close"
    />
  </div>
</template>
<script>
// import VHeader from "@/components/VHeader.vue";
import MyModal from "./components/ui/MyModal.vue";
import PostForm from "./components/PostForm.vue";
import MyError from "./components/ui/MyError.vue";
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  components: { MyModal, PostForm, MyError },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isModalShow", "error"]),
    ...mapState(["user"]),
  },

  async mounted() {
    this.$store.dispatch("users");
  },

  methods: {
    ...mapMutations(["ACTION", "DELETE"]),
    hideModal() {
      this.ACTION();
    },
    close(index) {
      this.DELETE(index);
    },
  },
};
</script>

<style lang="scss">
.container-page {
  // margin-left: 320px;
}
</style>
