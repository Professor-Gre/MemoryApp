<template>
  <header class="header">
    <section>
      <div class="header__inner">
        <router-link to="/" class="header__logo-link">
          <img src="@/assets/logo/logo.svg" alt="" class="header__logo">
        </router-link>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 80px;
    background-color: #F5F2F2;
    &__inner {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__logo-link {
      width: 103px;
      height: 50px;
      text-decoration: none;
    }
    &__logo {
      width: 100%;
      height: 100%;
    }
  }
</style>
