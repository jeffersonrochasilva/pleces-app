<template>
  <div class="loading">
    <div class="loading__container">
      <div class="loading__container__component">
        <p>País</p>
        <Auto-complite style="width: 303" />
      </div>
      <div class="loading__container__component">
        <p>Local</p>
        <Input style="width: 455" />
      </div>
      <div class="loading__container__component">
        <p>Meta</p>
        <Input style="width: 255px" />
      </div>
      <Button @click="funLoading(load)"> Adicionar </Button>
    </div>
  </div>
</template>
<script>
import AutoComplite from "@/components/commom/AutoComplite.vue";
import Button from "./commom/Button.vue";
import Input from "./commom/Input.vue";

import { funLoading } from"@/utils/users";
import { ref, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      load: false,
    });
    // function mudar() {
    //   state.load = !state.load;
    //   console.log(state.load);
    // }
    return {
      state,
      // mudar,
      funLoading,
    };
  },

  components: {
    AutoComplite,
    Button,
    Input,
  },
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 247px;
  background-color: #4f9419;
  display: flex;
  justify-content: center;
  &__container {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__component {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p {
        margin-bottom: 3px;
        font-family: sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
      }
    }
  }
}
</style>
