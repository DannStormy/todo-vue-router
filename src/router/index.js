import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import TodoView from '../views/TodoView'
import StoreView from '../views/StoreView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todo',
    component: TodoView
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
