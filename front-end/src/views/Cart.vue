<template>
  <div class="about">
    <div class="username">
      <input v-model="name" placeholder="Username">
    </div>
    <button @click="getCart()">Load Cart</button>
    <h1>Your cart</h1>
    <CartList :products="products" />
  </div>
</template>

<script>
import axios from 'axios';
import CartList from '../components/CartList.vue';

export default {
  name: 'Cart',
  data() {
    return {
      items: [],
    }
  },
  components: {
    CartList,
  },
  methods: {
    async getCart() {
      try {
        let response = await axios.get("/api/user/" + name);
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
