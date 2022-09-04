<template>
  <TodoApp />
</template>

<script>
// @ is an alias to /src
import TodoApp from '@/components/TodoApp.vue'

export default {
  name: 'TodoView',
  components: {
    TodoApp
}
}
</script>