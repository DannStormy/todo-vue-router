<template lang="">
  <div class="nav">
    <div class="title">
      <p>TodoApp</p>
    </div>
    <ul class="nav-items">
      <router-link to="/">Home</router-link>
      <router-link to="/todos">Todos</router-link>
      <router-link to="/store">Store</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
 .nav{
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    height: 64px;
    border-radius: 8px;
    margin: auto;
    margin-top: 30px;
 }
 .title{
    margin-left: 40px;
    font-weight: 600;
    font-size: 16px;
 }
 .nav-items{
    display: flex;
    list-style: none;
    gap: 24px;
    margin-right: 20px;
 }
 .nav-items > * {
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
 }
 .nav-items > *.router-link-exact-active{
  color: #5222D0;
 }
</style>