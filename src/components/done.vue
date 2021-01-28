<template>
  <div>
    <a-tag color="orange">
        已完成事项
      </a-tag>
      <ul>
      <li
        v-for="(item, index) in dones"
        :key="index"
        style="list-style: none;border:1px solid #ccc;padding:5px 10px;"
      >
         {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import store from "@/store";
  export default {
     setup(){
      return reactive({
        dones: computed(() => {
          return store.state.dones
        })
      })
    }
  }
</script>

<style   scoped>

</style>
