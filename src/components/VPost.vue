<template>
  <div
    class="post"
    @click="$router.push({ name: 'Post', params: { id: post._id } })"
  >
    <div class="post__wrap">
      <div class="post__image-content">
        <div class="post__image">
          <img :src="bgFon" alt="" />
        </div>
      </div>

      <div class="post__content">
        <div class="post__avatar avatar">
          <div class="avatar__wrap ">
            <img :src="avatar" alt="" />
          </div>
        </div>
        <div class="post__content-wrap">
          <div class="post__title">
            <h2>{{ post.title }}</h2>
          </div>
          {{ $route.params.id }}
          <div class="post__body">
            <span>{{ post.body }}</span>
          </div>
        </div>
      </div>
      <div class="post__footer">
        <div class="post__footer-wrap">
          <!-- <button><my-icons name="comment" size="25px" /></button> -->
          <button @click.stop="like">
            <my-icons
              name="heart"
              size="25px"
              :color="colorIcon ? 'red' : 'black'"
            />
            <span>{{ post.likes.length }}</span>
          </button>
          <button @click.stop="copuLink">
            <my-icons name="share" size="25px" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyIcons from "./ui/MyIcons.vue";
export default {
  components: { MyIcons },
  name: "v-post",
  props: {
    post: Object,
  },

  data() {
    return {
      previewFoto: require("@/assets/placeholder.png"),
      previewFon: require("@/assets/placeholder-image.jpg"),
      colorIcon: false,
    };
  },

  computed: {
    avatar() {
      return this.post.avatar ? this.post.avatar : this.previewFoto;
    },
    bgFon() {
      return this.post.images[0] ? this.post.images[0] : this.previewFon;
    },
  },

  mounted() {
    this.likesIconActive();
  },

  methods: {
    like() {
      this.colorIcon = !this.colorIcon;
      this.$store.dispatch("likes", {
        postId: this.post._id,
        userId: +localStorage.getItem("userId"),
      });
    },
    likesIconActive() {
      const id = localStorage.getItem("userId");
      this.post.likes.forEach((elem) => {
        if (elem === +id) {
          this.colorIcon = true;
        }
      });
    },
    copuLink() {
      const link = location.href + "post/" + this.post._id;
      window.navigator.clipboard.writeText(link);
      this.$store.dispatch("ERROR_MODAL", {
        text: "ссылка скопированна",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  // .post__wrap
  &__wrap {
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 5px grey;
    background: #fff;
    cursor: pointer;
    // &::after {
    //   content: "";
    //   text-align: center;
    //   position: absolute;
    //   bottom: 0;
    //   right: 0;
    //   width: 100%;
    //   height: 100px;
    //   background: linear-gradient(
    //     to bottom,
    //     rgba(255, 255, 255, 0),
    //     white 100%
    //   );
    //   pointer-events: none;
    // }
  }
  // .post__image-content
  &__image-content {
    position: relative;
  }
  // .post__image
  &__image {
    height: 150px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
  // .post__avatar
  &__avatar {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -60px;
  }

  // .post__content
  &__content {
    text-align: center;
    max-height: 150px;
    position: relative;
    background: #fff;
    transition: 0.4s ease-in-out;
  }
  &__content-wrap {
    padding: 50px 5px 10px 5px;
  }
  // .post__title
  &__title {
  }
  // .post__body
  &__body {
  }
  // .post__footer
  &__footer {
  }
  // .post__footer-wra
  &__footer-wrap {
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    position: relative;
    button {
      flex: 1 1 auto;
      border: none;
      background: rgba(255, 255, 255, 0);
      cursor: pointer;
    }
  }

  &:hover .post__content {
    transform: translateY(-80px);
    transition: 0.4s ease-in-out;
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
