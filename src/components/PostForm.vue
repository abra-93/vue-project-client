<template>
  <form @submit.prevent>
    <div class="post-form">
      <div class="post-form__wrap">
        <div class="post-form__header">
          <h3>Новый пост</h3>
        </div>
        <div class="post-form__avatar avatar">
          <div class="avatar__wrap">
            <input
              @change="uploadFile()"
              type="file"
              ref="file"
              accept="image/*"
            />
            <img :src="previewFoto" alt="" />
            <button v-if="btnUploadAvatar" @click="$refs.file.click()">
              <div><my-icons name="camera" size="35px" /></div>
            </button>
            <button v-if="btnRemoveAvatar" @click.prevent="removeFoto">
              <div><my-icons name="remove" size="35px" /></div>
            </button>
          </div>
        </div>
        <div class="post-form__content">
          <div class="post-form__content-title">
            <span>Заголовок</span>
            <my-input v-model="posts.title" />
          </div>
          <div class="post-form__content-desc">
            <span>Описание</span>
            <my-textarea v-model="posts.body" />
          </div>
        </div>
        <div class="post-form__image">
          <div class="post-form__image-wrap">
            <input
              type="file"
              ref="fileArray"
              multiple
              accept="image/*"
              @change="uploadArrayImage()"
            />
            <div
              class="post-form__image-array"
              v-for="img in previewArrayFoto"
              :key="img.index"
            >
              <img :src="img" alt="" />
            </div>

            <button v-show="btnUploadImage" @click="$refs.fileArray.click()">
              <my-icons name="image" size="40" />
            </button>
          </div>
        </div>
        <div class="post-form__footer">
          <my-button @click.native="addPost">Создать пост</my-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import MyButton from "./ui/MyButton.vue";
import MyInput from "./ui/MyInput.vue";
import MyTextarea from "./ui/MyTextarea.vue";
// import placeholder from "@/assets/placeholder.png";
import MyIcons from "./ui/MyIcons.vue";
export default {
  components: { MyInput, MyButton, MyTextarea, MyIcons },
  data() {
    return {
      previewFoto: require("@/assets/placeholder.png"),
      previewArrayFoto: [],
      posts: {
        id: new Date().getUTCMilliseconds(),
        avatar: "",
        title: "",
        body: "",
        image: [],
      },
      btnUploadAvatar: true,
      btnRemoveAvatar: false,
      btnUploadImage: true,
      errorMessage: false,
    };
  },
  watch: {
    previewArrayFoto(value) {
      if (value.length >= 3) this.btnUploadImage = false;
    },
  },

  methods: {
    uploadFile() {
      const file = this.$refs.file.files[0];
      this.posts.avatar = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        this.previewFoto = reader.result;
      });
    },
    uploadArrayImage() {
      const files = this.$refs.fileArray.files;
      if (files.length <= 2) {
        this.posts.image.push(...files);

        [...files].forEach((file) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.previewArrayFoto.push(reader.result);
          };
          reader.readAsDataURL(file);
        });
      } else {
        this.$store.dispatch("ERROR_MODAL", "Привышено число картинок");
      }
    },
    removeFoto() {
      this.previewFoto = require("@/assets/placeholder.png");
      this.posts.avatar = "";
    },
    addPost() {
      if (this.posts.title && this.posts.body) {
        this.$store.dispatch("NEW_POST", this.posts, false);
      } else {
        this.$store.dispatch(
          "ERROR_MODAL",
          "Поле 'Заголовок' и 'Описание' пустые"
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.post-form {
  // .post-form__wrap
  &__wrap {
  }
  // .post-form__avatar
  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  // .post-form__content
  &__content {
    margin: 20px 0;
  }
  // .post-form__content-title
  &__content-title {
    margin-bottom: 10px;
  }
  // .post-form__content-desc
  &__content-desc {
  }
  // .post-form__footer
  &__array-image {
    margin-bottom: 20px;
  }
  &__image-wrap {
    display: flex;
    margin-bottom: 20px;
    input {
      display: none;
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
  &__image-array {
    width: 100px;
    overflow: hidden;
    padding: 5px;
    img {
      object-fit: cover;
      height: 100%;
    }
  }

  &__footer {
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

    input {
      display: none;
    }

    img {
      object-fit: cover;
      height: 100%;
    }
    button {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      border: none;
      background: none;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: rgba(128, 128, 128, 0.363);
        transition: 0.3s;
      }
      &:hover > div {
        display: inline-block;
        padding: 10px 13px;
        border-radius: 50%;
        background: #f2f2f2a6;
        transition: 0.3s;
      }
    }
  }
}
</style>
