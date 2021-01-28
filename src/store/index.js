import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id:0, check: false, name: "张三"},
      {id:1, check: false, name: "李四"},
      {id:2, check: false, name: "王五"},
    ],
    dones: [],
    deletes: [],
  },
  mutations: {
    // 操作state里面的数据的方法，
    add(state, value){
      state.todos.push(value)
    },
    // 点击删除时触发
    delete(state, index){
      var item = null;
      var num = 0;
      state.todos.forEach((one,i) => {
        if(one.id === index){
          item = one;
          num = i;
        }
      })
      state.todos.splice(num, 1);
      state.deletes.push(item);
    },
    // 点击多选框触发
    done(state, index){
      var item = null;
      var num = 0;
      state.todos.forEach((one,i) => {
        if(one.id === index){
          item = one;
          num = i;
        }
      })
      state.todos.splice(num, 1);
      state.dones.push(item);

    }
  },
  actions: {
  },
  modules: {
  }
})
