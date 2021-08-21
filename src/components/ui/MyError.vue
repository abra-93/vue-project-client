<template>
  <div :style="[{ width: width + 'px' }, location]" class="error">
    <transition-group tag="ul" name="error-fade">
      <li
        class="error__item"
        v-for="(msg, index) in message"
        :key="index"
        :data-id="index"
        @click.stop="close(index)"
      >
        <!-- <strong>ОШИБКА # </strong><br /> -->
        {{ msg.text }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    message: Array,
    width: [String, Number],
    position: {
      type: [String, Number, Object],
    },
  },

  data() {
    return {};
  },

  watch: {},

  computed: {
    location() {
      // Определяем положение элемента на странице
      const obj = {};
      if (this.position) {
        const pos = this.position.split(/\b(?:a|the|was|\s)+\b/i);
        pos.forEach((elem) => {
          obj[elem] = "0px";
        });
      }
      return obj;
    },
    // color() {
    //   let type;
    //   this.message.forEach((item, index) => {
    //     console.log(item, index);
    //     if (item.type === "success") {
    //       type = "background: seagreen";
    //     } else if (item.type === "error") {
    //       type = "background: #e54d42;";
    //     }
    //   });
    //   return type;
    // },
  },

  methods: {
    close(index, event) {
      this.$emit("click", index, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  z-index: 1000;
  display: block;
  width: 300px;
  height: auto;
  position: fixed;
  margin: 5px;
  transition: all 0.4s ease;

  &__item {
    display: flex;
    padding: 10px;
    background: #e54d42;
    border-radius: 5px;
    color: #fff;
    margin: 5px;
    position: relative;
    cursor: pointer;
    // display: inline-block;

    &::after {
      content: "";
      width: 5px;
      height: 99%;
      position: absolute;
      left: 0;
      top: 0;
      background: #ae0000;
      border-radius: 5px 0 0 5px;
    }
  }
}

.success-msg {
  background: #188e18;
}
.error-msg {
  background: #e54d42;
}
.error-fade-enter-active,
.error-fade-leave-active,
.error-fade-move {
  transition: all 0.4s ease-in-out;
}

.error-fade-enter,
.error-fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.error-fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
