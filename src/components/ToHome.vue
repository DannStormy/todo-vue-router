<template>
  <NavBar />
  <div class="home">
    <div class="left">
      <p class="title">Manage your tasks effectively</p>
      <p class="sub__title">Modern todo list application to help you track your activities and stay productive.</p>
      <button @click="getStarted">Get Started</button>
    </div>
    <div class="hero">
      <img src="@/assets/hero-illustration.svg" alt="hero-image">
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
    components: { NavBar },
    methods: {
      getStarted(){
        this.$router.push('/todos')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    display: flex;
    justify-content: space-between;
    margin-top: 102px;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  .title{
    width: 330px;
    height: 96px;
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -0.03em;
    line-height: 48px;
    margin-bottom: 12px;
  }
  .sub__title{
    width: 324px;
    height: 52px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 25px;
  }
  button{
    padding: 8px 24px;
    width: 137px;
    height: 42px;
    background: #5222D0;
    border-radius: 8px;
    color: white;
    border: none;
    cursor: pointer;
  }
  .hero{
    margin-top: -30px;
  }
</style>
