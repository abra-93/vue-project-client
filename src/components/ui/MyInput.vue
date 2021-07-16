<template>
  <input
    class="input"
    :type="isType"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: [String, Number],
    isType: String,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #cac9c9;
  outline: none;
  &:focus {
    border: 1px solid #0e84e4;
  }
}
</style>
