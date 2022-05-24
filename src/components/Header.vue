<template>
  <div class="header">
    <div class="header__container">
      <img src="@/assets/logo.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 85px;
  background-color: #000;
  display: flex;
  justify-content: center;
  &__container {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  
  }
}
</style>
