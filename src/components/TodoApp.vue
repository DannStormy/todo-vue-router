<template>
  <NavBar />
  <div class="container">
    <form @submit.prevent="addTodo">
      <input type="text" placeholder="Add task..." v-model="todo">
      <button class="add-todo" type="submit" v-if="!isEditing">Add</button>
      <button @click="saveTodo()" class="add-todo" type="submit" v-else>Save</button>
    </form>
      <div :class="['todo', {'editing': isEditing === todoItem.id}]" v-for="todoItem, index in sortList" :key="index">
        <div class="left">
          <input type="checkbox" v-model="todoItem.completed">
          <div :class="['task', {'completed': todoItem.completed}]">{{ todoItem.name }}</div>
        </div>
        <div class="options">
          <button @click="editTodo(todoItem.id)"><img class="edit" src="@/assets/akar-icons_edit.svg" alt="delete"></button>
          <button @click="delTodo(index)"><img class="delete" src="@/assets/Vector.svg" alt="delete"></button>
          <div class="priority">{{todoItem.priority}}</div>
          <div class="up-down">
            <img @click="increasePriority(todoItem.id)" src="@/assets/Vector1.svg" alt="arrow-up" srcset="">
            <img @click="decreasePriority(todoItem.id)" src="@/assets/Vector2.svg" alt="arrow-down" srcset="">
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import NavBar from './NavBar.vue';
import { mapState, mapGetters } from 'vuex';
export default {
    data: () => ({
        todo: "",
        isEditing: null
    }),
    methods: {
        addTodo() {
            const uniqueID = Math.floor(Math.random() * Math.pow(10, 15));
            const todo = {
              name: this.todo,
              id: uniqueID,
              priority: 0,
              completed: false
            };
            if (this.todo) {
                this.todoList.push(todo);
            }
            this.todo = "";
        },
        delTodo(index) {
            console.log("Index is: ", index);
            console.log(this.todoList);
            this.todoList.splice(index, 1);
        },
        increasePriority(id) {
            const updatedTodo = this.todoList.map((todoItem) => {
                if (todoItem.id === id) {
                    return { ...todoItem, priority: todoItem.priority + 1 };
                }
                return todoItem;
            });
            this.todoList = updatedTodo;
        },
        decreasePriority(id) {
            const updatedTodo = this.todoList.map((todoItem) => {
                if (todoItem.id === id) {
                    return { ...todoItem, priority: todoItem.priority - 1 };
                }
                return todoItem;
            });
            this.todoList = updatedTodo;
        },
        editTodo(id){
            this.isEditing = id
            const editItem = this.todoList.find((item => item.id === id));
            this.todo = editItem.name;
        },
        saveTodo(){
          if (!this.todo){
            return
          }
          const todoID = this.isEditing;
          this.todoList.map((todoItem) => {
            if (todoItem.id === todoID) {
                todoItem.name = this.todo
            }
          });
          this.todo = "";
          this.isEditing = null
        }
    },
    computed: {
      ...mapState(['todoList']),
      ...mapGetters(['sortList']),
      // sortList() {
      //       return [...this.todoList].sort((a, b) => b.priority - a.priority);
      //       // return this.todoList;
      //   }
    },
    components: { NavBar }
}
</script>
<style scoped>
.container{
  width: 641px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

form{
  margin-top: 35px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}
input[type="text"]{
  width: 100%;
  height: 56px;
  padding: 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}

/* Create a custom checkbox */
input[type="checkbox"]{
  width: 20px;
  height: 20px;
  background-color: #D9D9D9;
  border-radius: 4px;
  margin-right: 12px;
  cursor: pointer;
}

.task{
  font-weight: 500;
}
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

.add-todo{
  width: 91px;
  height: 42px;
  margin-left: -97px;
  background: #5222D0;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.editing{
  opacity: 0.5;
  pointer-events: none;
}
.todo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 641px;
  height: 72px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 4px;
}
.todo button{
  padding: 0;
  background: white;
  border: none;
  cursor: pointer;
}


.options{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
}
.up-down{
  display: flex;
  flex-direction: column;
  height: 44px;
  justify-content: space-between;
}

.up-down img{
  margin: 4px;
  cursor: pointer;
}

.priority{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 44px;
  font-weight: 600;
  background: #EFEFEF;
  border-radius: 8px;
}
.left{
  display: flex;
  align-items: center;
}
</style>