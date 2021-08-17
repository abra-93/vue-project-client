<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header-wrap container">
        <my-button @click.native="modal">Добавить пост</my-button>
      </div>
    </div>
    <section class="home__posts posts container">
      <div class="loading"></div>
      <div class="posts__wrap">
        <v-post v-for="post in allPosts" :key="post.id" :post="post" />
      </div>
    </section>
  </div>
</template>

<script>
import MyButton from "@/components/ui/MyButton.vue";
import VPost from "@/components/VPost.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: { MyButton, VPost },
  data() {
    return {
      isLoad: false,
      posts: "",
    };
  },

  computed: {
    ...mapGetters(["allPosts"]),
  },
  methods: mapActions(["getPosts", "modal"]),
  mounted() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
.home {
  // .home__header
  &__header {
    box-shadow: 0px 2px 5px 0px #7e7e7e41;
    padding: 10px 0;
  }
  &__header-wrap {
    display: flex;
    justify-content: flex-end;
  }
  &__posts {
    margin-top: 50px;
  }
}
.posts {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    // grid-template-rows: 1fr 1fr 1fr;
    gap: 20px 20px;
    transition: 0.4s cubic-bezier(0.39, 0.58, 0.57, 1);
  }
}
</style>
