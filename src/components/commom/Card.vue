<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 250px;
  height: 250px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 1em #ababab;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
