<template>
  <div
    :class="{
      'game-atom': true,
      'picked': picked,
      'guessed': guessed,
      'notguessed': notguessed
    }"
  >
    <div class="game-atom__front"></div>
    <div class="game-atom__back">
      <img
        :src="imageSrc"
        alt=""
        class="game-atom__image"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elementId: {
      type: Number,
      default: 0
    },
    pairId: {
      type: Number,
      default: 0
    },
    picked: {
      type: Boolean,
      default: false
    },
    guessed: {
      type: Boolean,
      default: false
    },
    notguessed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageSrc () {
      const requireString = require('@/assets/sprites/sprite_' + this.pairId + '.svg')
      return requireString
      // return requireString
    }
  }
}
</script>

<style lang="scss" scoped>
  .game-atom {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    perspective: 1000px;
    &.picked .game-atom__front {
      transform: rotateY(180deg);
    }
    &.picked .game-atom__back {
      transform: rotateY(360deg);
    }
    &.guessed .game-atom__front {
      transform: rotateY(180deg);
    }
    &.guessed .game-atom__back {
      transform: rotateY(360deg);
    }
    &.guessed &__front, &.guessed &__back {
      background-color: #E9FFEF;
    }
    &.notguessed &__front, &.notguessed &__back {
      background-color: #FFE9E9;
    }
    &__front, &__back {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #F5F2F2;
      // border: 2px solid #FA899B;
      border-radius: 8px;
      backface-visibility: hidden;
      will-change: transform;
      transition: transform 0.5s, background-color 0.3s;
    }
    &__front {
      z-index: 1;
    }
    &__back {
      transform: rotateY(180deg);
      z-index: 0;
    }
    &__image {
      width: 60%;
      height: 60%;
      object-position: center;
      object-fit: contain;
    }
  }
</style>
