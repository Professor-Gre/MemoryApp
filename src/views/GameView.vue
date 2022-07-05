<template>
  <div class="game-view">
    <section>
      <div class="game-view__inner">
        <div class="game-view__game-grid">
          <GameAtom
            v-for="gridElement in gameGrid"
            :key="gridElement.id"
            :elementId="gridElement.id"
            :pairId = "gridElement.pairId"
            :picked="gridElement.picked"
            :guessed="gridElement.guessed"
            :notguessed="gridElement.notguessed"
            @click="atomClickHandler(gridElement)"
          />
        </div>
        <div class="game-view__game-side">
          <div class="game-view__text-container">
            <span class="game-view__text">
              Всего пар:
            </span>
            <span class="game-view__text">
              {{ gridElements / 2 }}
            </span>
          </div>
          <div class="game-view__text-container">
            <span class="game-view__text">
              Угадано:
            </span>
            <span class="game-view__text">
              {{ guessedHolder.length }}
            </span>
          </div>
          <div
            class="game-view__button"
            @click="GameButtonHandler"
          >
            <BaseButton
              :text="GameButtonText"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GameAtom from '@/components/elements/GameAtom'
import BaseButton from '@/components/ui/BaseButton'
export default {
  components: {
    GameAtom,
    BaseButton
  },
  data () {
    return {
      isGameStarted: false,
      canDo: false,
      startDelay: 5000,
      gameGrid: [],
      gridElements: 30,
      guessedHolder: [],
      pairHolder: []
    }
  },
  created () {
    this.fillGameGrid()
  },
  computed: {
    GameButtonText () {
      if (this.isGameStarted) {
        return 'Заново'
      } else {
        return 'Начать'
      }
    }
  },
  methods: {
    GameButtonHandler () {
      if (!this.isGameStarted) {
        this.isGameStarted = true
        this.canDo = false
        this.startGame()
        setTimeout(() => {
          this.canDo = true
        }, this.startDelay)
      } else if (this.canDo) {
        this.canDo = false
        this.startGame()
        setTimeout(() => {
          this.canDo = true
        }, this.startDelay)
      }
    },
    startGame () {
      this.guessedHolderClear()
      this.pairHolderClear()
      this.arrayShuffle(this.gameGrid)
      this.gameGrid.forEach(element => {
        element.picked = true
        element.notguessed = false
        element.guessed = false
        setTimeout(() => {
          element.picked = false
        }, this.startDelay)
      })
    },
    atomClickHandler (element) {
      if (this.isGameStarted) {
        if (this.canDo) {
          if (!element.picked && !element.guessed) {
            element.picked = true
            this.canDo = false
            this.pairHolder.push(element)
            if (this.pairHolder.length === 2) {
              this.guessCheck()
            } else {
              this.canDo = true
            }
          }
        }
      }
    },
    guessCheck () {
      if (this.pairHolder[0].pairId === this.pairHolder[1].pairId) {
        setTimeout(() => {
          this.pairHolder.forEach(elem => {
            elem.guessed = true
            elem.picked = false
            elem.notguessed = false
          })
          setTimeout(() => {
            this.guessedHolderAdd()
            this.canDo = true
          }, 300)
        }, 500)
      } else {
        setTimeout(() => {
          this.pairHolder.forEach(elem => {
            elem.notguessed = true
          })
          setTimeout(() => {
            this.pairHolderClear()
            this.canDo = true
          }, 300)
        }, 500)
      }
    },
    pairHolderClear () {
      this.pairHolder.forEach(elem => {
        elem.picked = false
        elem.notguessed = false
      })
      this.pairHolder = []
    },
    guessedHolderAdd () {
      this.guessedHolder.push(this.pairHolder)
      this.pairHolder = []
    },
    guessedHolderClear () {
      this.guessedHolder.forEach(pair => {
        pair.forEach(element => {
          element.picked = false
          element.guessed = false
        })
      })
      this.guessedHolder = []
    },
    arrayShuffle (array) {
      // алгоритм Фишера-Йетса
      let j, temp
      for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
      return array
    },
    fillGameGrid () {
      for (let i = 1; i <= this.gridElements / 2; i++) {
        this.gameGrid.push({
          elementId: i,
          pairId: i,
          picked: false,
          guessed: false,
          notguessed: false
        })
        this.gameGrid.push({
          elementId: ((this.gridElements / 2) + i),
          pairId: i,
          picked: false,
          guessed: false,
          notguessed: false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .game-view {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 60px;
    &__inner {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 80px;
    }
    &__game-grid {
      width: 770px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px 10px;
    }
    &__game-side {
      width: 225px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 20px;
    }
    &__text-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__text {
      font-size: 22px;
      color: #242424;
      line-height: 1.1;
      user-select: none;
    }
    &__button {
      width: 100%;
      margin-top: 50px;
    }
  }
</style>
