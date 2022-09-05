<template>
  <div class="products">
    <StoreList />
  </div>
</template>

<script>
import StoreList from '@/components/StoreList.vue';

export default {
  name: 'StoreView',
  components: {
    StoreList
}
}
</script>