<template>
  <div class="about">
    <div class="username">
      <input v-model="name" placeholder="Username">
    </div>
    <button @click="getCart()">Load Cart</button>
    <h1>Your cart</h1>
    <ProductList :products="products" />
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'Cart',
  data() {
    return {
      items: [],
    }
  },
  components: {
    ProductList,
  },
  methods: {
    async getCart() {
      try {
        let response = await axios.get("/api/user/:id");
        let user = response.data;
        this.items = user.cart;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>

</style>
