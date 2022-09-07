<template>
  <NavBar />
  <div class="cart__count">
    <p>Items in Cart: </p>
    <div class="circle">{{updateCartLength}}</div>
  </div>
  <div class="product__container">
    <div class="product" v-for="product, index in productList" :key="index">
      <img :src="product.image" alt="prod">
      <p class="title">{{product.title}}</p>
      <button @click="removeFromCart(product)" v-if="cart.includes(product)">Remove</button>
      <button @click="addToCart(product)" v-else>Add to Cart</button>
    </div>
  </div>
</template>
<script>
// import { productList } from '@/productList';
import { mapState, mapActions, mapGetters } from 'vuex';
import NavBar from './NavBar.vue';
export default {
    name: 'ShoppingList',
    data: () => ({
      cartCount: 0,
    }),
    methods: {
      addToCart(item) {
        this.newCart(item)
      },
      removeFromCart(item){
        console.log('Removing ', item)
        console.log(this.cart)
        this.removeCart(item)
      },
      ...mapActions({newCart: 'addToCart', removeCart: 'removeFromCart'}),
    },
    mounted(){
      console.log("Now mounted")
    },
    computed: {
      ...mapState({
        productList: (state) => state.shop.productList,
        cart: (state) => state.shop.cart
      }),
     ...mapGetters(["updateCartLength"])
    },
    components: { NavBar }
}
</script>
<style scoped>
  .cart__count {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    font-weight: 500;
  }

  .circle{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5px;
    height: 5px;
    padding: 20px;
    color: white;
    margin-left: 5px;
    background-color: crimson;
    border-radius: 50%;
  }
  .product__container, .cart__items__container{
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: scroll;
    height: 500px;
  }
  .cart__items__container{
    height: auto;
  }
  .product, .cart__item{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 180px;
    height: 300px;
    background-color: white;
    margin: 10px 0;
    border-radius: 8px;
  }

  .product img, .cart__item img{
    width: 100px;
    height: 100px;
  }
  .title, .cart__title{
    text-align: center;
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
</style>