<template>
  <div>
     <a-tag color="orange">
        已删除事项
      </a-tag>
  <ul>
      <li v-for="(item, index) in deletes" :key="index" style="list-style: none;border:1px solid #ccc;padding:5px 10px;">
        <a-checkbox v-model="item.check">{{ item.name }}</a-checkbox>
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
        deletes: computed(() => {
          return store.state.deletes
        })
      })
    }
  }
</script>

<style   scoped>

</style>
