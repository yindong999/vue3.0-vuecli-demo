<template>
  <div>
    <a-tag color="orange">
      待办事项
    </a-tag>
    <a-input-search
      placeholder="input search text"
      enter-button="添加"
      size="large"
      v-model="inputVal"
      @search="add"
    />
    <ul>
      <li
        v-for="(item, index) in todos"
        :key="index"
        style="list-style: none;border:1px solid #ccc;padding:5px 10px;"
      >
        <a-checkbox  @change="onChange(item)" :label="item.id">{{item.name}}</a-checkbox>
        <a-button type="primary" @click="deleteItem(item.id)">
          删除
        </a-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref, computed } from "vue";
import store from "@/store";
export default {
  setup() {
    const inputVal = ref("");

    const add = value => {
      if (value.trim()) {

        var itemId = Math.ceil(Math.random()*10000);
        store.commit("add", { id: itemId, check: false, name: value });
      } else {
        return false;
      }
    };
    const onChange = val => {
      store.commit("done", val.id);
    };
    const deleteItem = (index) => {
      store.commit('delete', index);
    };
    return reactive({
      inputVal,
      add,
      onChange,
      deleteItem,
      todos: computed(() => store.state.todos)
    });
  }
};
</script>

<style scoped></style>
