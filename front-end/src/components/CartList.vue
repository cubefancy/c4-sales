<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="image">
          <img src="product.image">
        </div>
        <div class="info">
          <h2>{{product.name}} -- {{product.price}}</h2>
          <div class="other">
            <p>{{product.description}}</p>
            <button class="remove">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CartList',
  props: {
    products: Array,
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/user/");
        let user = response.data;
        this.products = user.cart;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },

}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {

}
.info {

}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}
.auto {
  margin-left: auto;
}
</style>
