import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    todoList: [],
  }),
  getters: {
    sortList: (state) => {
      return [...state.todoList].sort((a, b) => b.priority - a.priority);
    }
  },
  mutations: {
    updateList (state, newList) {
      state.todoList = newList
    },
    updateTodo(state, {id, name}){
      state.todoList.map((item) => {
        console.log(id, name)
        if (item.id === id){
          item.name = name
        }
      })
    }
  },
  actions: {
    addTodo({commit, state}, todo){
      const newList = [...state.todoList, todo];
      commit('updateList', newList)
    },
    saveTodo: (context, payload) => {
      context.commit('updateTodo', payload)
    }
  }
});
export default store;