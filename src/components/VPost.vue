<template>
  <div class="post">
    <div class="post__wrap">
      <div class="post__image">
        <img alt="" />
      </div>
      <div class="post__avatar avatar">
        <div class="avatar__wrap ">
          <img :src="previewFoto" alt="" />
        </div>
      </div>
      <div class="post__content">
        <div class="post__title">
          <h2>{{ post.title }}</h2>
        </div>
        <div class="post__body">
          <span>{{ post.body }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-post",
  props: {
    post: Object,
  },

  data() {
    return {
      previewFoto: require("@/assets/placeholder.png"),
    };
  },

  // updated() {
  //   console.log(this.props);
  // },
  mounted() {
    this.updateFoto();
  },
  methods: {
    updateFoto() {
      const file = this.post.avatar;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewFoto = reader.result;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  // flex: 1 1 300px;
  transition: 0.4s cubic-bezier(0.39, 0.58, 0.57, 1);
  &__wrap {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 45px;
    overflow: hidden;
    box-shadow: 0px 0px 5px grey;
    border: 1px solid #ddd;
    background: #fff;
  }
  &__image {
    max-height: 200px;
    overflow: hidden;
  }
  &__avatar {
    display: flex;
    justify-content: center;
  }
}
.avatar {
  // .avatar__wrap
  &__wrap {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    border: 1px solid grey;
    position: relative;

    img {
      object-fit: cover;
      height: 100%;
    }
  }
}
</style>
