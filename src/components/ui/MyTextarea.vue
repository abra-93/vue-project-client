<template>
  <textarea
    class="textarea"
    :value="value"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: [String, Number],
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  min-height: 100px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #cac9c9;
  resize: none;
  outline: none;
  &:focus {
    border: 1px solid #0e84e4;
  }
}
</style>
