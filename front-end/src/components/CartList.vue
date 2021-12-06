<template>

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
