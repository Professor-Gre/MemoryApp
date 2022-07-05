<template>
  <div class="hello-view">
    <section>
      <div class="hello-view__inner">
        <span class="hello-view__title">
          Приветствуем вас в игре “Найди пару”!
        </span>
        <span class="hello-view__text">
          Правила игры простые: <br>
          В таблице 5x6 случайным образом размещены карточки с картинками, каждая в двух экземплярах. <br>
          В начале игры все картинки видимы короткое время. <br>
          Затем все карточки переворачиваются. <br>
          При нажатии на карточку появляется картинка. Если пара не угадана, то открытые карточки закрываются. <br>
          Задача угадать позиции всех одинаковых картинок. <br>
          Игра завершается когда открыты все пары. <br>
        </span>
        <div
          class="hello-view__button"
          @click="toGameButton"
        >
          <BaseButton
            text="Играть"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton'
export default {
  name: 'HomeView',
  components: {
    BaseButton
  },
  methods: {
    toGameButton () {
      this.$router.push({ path: '/game' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .hello-view {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 60px;
    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    &__title {
      color: #242424;
      font-size: 28px;
      font-weight: 400;
      line-height: 1;
    }
    &__text {
      color: #242424;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.5;
      margin-top: 35px;
    }
    &__button {
      width: 255px;
      margin-top: 40px;
    }
  }
</style>
