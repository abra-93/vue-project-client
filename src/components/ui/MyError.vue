<template>
  <div :class="{ active: visible }" class="error">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },
};
</script>

<style scoped>
.error {
  z-index: 1000;
  position: fixed;
  width: 200px;
  height: auto;
  background: #e54d42;
  color: #fff;
  border-radius: 10px;
  right: 0;
  bottom: -100px;
  padding: 10px;
  margin: 5px;
  opacity: 1;
  transition: 0.4s;
}
.active {
  bottom: 0;
  opacity: 1;
  transition: 0.4s;
}
</style>
