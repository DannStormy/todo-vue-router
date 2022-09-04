<template>
  <div class="home">
    <ToHome />
  </div>
</template>

<script>
// @ is an alias to /src
import ToHome from '@/components/ToHome.vue';

export default {
  name: 'HomeView',
  components: {
    ToHome
}
}
</script>
