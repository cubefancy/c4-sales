<template>
  <div class="about">
    <h1>This page will have the things for sale, as well as a filter option.</h1>
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from "../components/ProductList.vue";
export default {
  name: Browse,
  components: {
    ProductList,
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>
