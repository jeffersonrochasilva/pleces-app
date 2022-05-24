<template>
  <select placeholder="Selecione" name="select">
    <option value="primeira opção">primeira opção</option>
    <option value="segunda opção" selected>segunda opção</option>
    <option value="terceira opção">terceira opção</option>
  </select>
</template>

<style lang="scss" scoped>
select {
  width: 303px;
  height: 48px;
  background: #ffffff;
  border-radius: 7px;
  border-style: none;
  padding: 10px;
  option {
    width: 303px;
    height: 48px;
    background: #ffffff;
    color: #000000;
    padding: 10px;
  }
}
</style>
