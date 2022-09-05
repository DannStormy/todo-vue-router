import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    todoList: [],
  }),
  getters: {
    sortList: (state) => {
      return [...state.todoList].sort((a, b) => b.priority - a.priority);
    }
  }
});

export default store;