export default {
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
        if (item.id === id){
          item.name = name
        }
      })
    },
    delTodo(state, index){
      state.todoList.splice(index, 1);
    }
  },
  actions: {
    addTodo({commit, state}, todo){
      console.log("add: ", todo)
      const newList = [...state.todoList, todo];
      commit('updateList', newList)
    },
    saveTodo: (context, payload) => {
      context.commit('updateTodo', payload)
    },
    deleteTodo(context, payload){
      context.commit('delTodo', payload)
    }
  }
}