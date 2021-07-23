<template>
  <div class="post">
    <div class="post__wrap">
      <div class="post__image-content">
        <div class="post__image">
          <img :src="bgImage" alt="" />
        </div>
        <div class="post__avatar avatar">
          <div class="avatar__wrap ">
            <img :src="previewFoto" alt="" />
          </div>
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
      bgImage: "",
    };
  },

  mounted() {
    if (this.post.avatar) this.updateFoto();

    if (this.post.image) this.bgImageFon();
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
    bgImageFon() {
      const file = this.post.image[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.bgImage = reader.result;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  // .post__wrap
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
  // .post__image-content
  &__image-content {
    position: relative;
  }
  // .post__image
  &__image {
    height: 150px;
    overflow: hidden;
  }
  // .post__avatar
  &__avatar {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: -40px;
  }
  // .post__content
  &__content {
    margin-top: 50px;
    text-align: center;
  }
  // .post__title
  &__title {
  }
  // .post__body
  &__body {
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

// .post {
//   // flex: 1 1 300px;
//   transition: 0.4s cubic-bezier(0.39, 0.58, 0.57, 1);
//   &__wrap {
//     width: 100%;
//     height: 100%;
//     position: relative;
//     padding-bottom: 45px;
//     overflow: hidden;
//     box-shadow: 0px 0px 5px grey;
//     border: 1px solid #ddd;
//     background: #fff;
//   }
//   &__image-wrap {
//     height: 100%;
//     position: relative;
//   }
//   &__image {
//     max-height: 200px;
//     overflow: hidden;
//   }
//   &__avatar {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     position: absolute;
//     bottom: -40px;
//   }
// }
// .avatar {
//   // .avatar__wrap
//   &__wrap {
//     width: 100px;
//     height: 100px;
//     border-radius: 100%;
//     overflow: hidden;
//     border: 1px solid grey;
//     position: relative;

//     img {
//       object-fit: cover;
//       height: 100%;
//     }
//   }
// }
</style>
