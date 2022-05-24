<template>
  <div class="container">
    <!-- <h1>{{nome}}</h1> -->
    <Header />
    <Loading />
    <Countys />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
import Countys from "@/components/Countys.vue";

import { ref, onMounted, reactive} from "vue";
export default {
  name: "HomeView",
  setup(){
    const state = reactive({
      // nome: "Home",
    });
    onMounted(() => {
      console.log("HomeView mounted");
    });
    return {
      name: "HomeView",
      state
    };
  },
  
  components: {
    Header,
    Loading,
    Countys
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  &__cards {
    &__country {
      width: 100%;
      display: flex;
      margin: 5px;
      border-bottom: 1px solid #ababab;
      &__icon {
        width: 50%;
        display: flex;
        justify-content: flex-end;
      }
    }
    display: flex;
  }
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
