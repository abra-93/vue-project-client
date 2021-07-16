<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 10px 40px;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: #0e84e4;
    box-shadow: 0px 2px 5px 0px #7e7e7e41;
    transition: 0.4s;
  }
}
</style>
