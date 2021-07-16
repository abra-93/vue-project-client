<template>
  <transition name="slide-fade">
    <div class="modal" v-if="isShow" @click.stop="$emit('onClick')">
      <div @click.stop class="modal__wrap">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isShow: Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(128, 128, 128, 0.384);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrap {
    max-width: 500px;
    width: 100%;
    background: #fff;
    min-height: 400px;
    border-radius: 10px;
    padding: 20px;
    z-index: 1000;
    position: relative;
  }
}
// .slide-fade-enter-active {
//   transition: all 0.3s ease;
// }
// .slide-fade-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateY(10px);
//   opacity: 0;
// }
</style>
