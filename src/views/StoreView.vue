<template>
  <div class="products">
    <StoreList />
  </div>
</template>

<script>
import StoreList from '@/components/StoreList.vue';
// @ is an alias to /src

export default {
  name: 'StoreView',
  components: {
    StoreList
}
}
</script>