<template>
<div class="home">
  <ProductList :products="products" />
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import ProductList from "../components/ProductList.vue";
export default {
  name: 'Home',
  data() {
    return {
      items:[],
    }
  },
  created() {
    this.getItems();
  },
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
