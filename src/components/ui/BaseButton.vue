<template>
  <button class="base-button">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Кнопка'
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-button {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F2F2;
    border: 2px solid #FA899B;
    border-radius: 8px;
    color: #242424;
    font-size: 18px;
    line-height: 1;
    padding: 0;
    margin: 0;
    cursor: pointer;
    user-select: none;
    transition: color 0.2s, background-color 0.2s;
    &:hover {
      background-color: #FA899B;
      color: #fff;
    }
  }
</style>
