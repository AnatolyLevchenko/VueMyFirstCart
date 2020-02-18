<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col">
        <product v-bind:product="this.product"></product>
      </div>
    </div>
  </div>
</template>

<script>
import product from "./Product";

export default {
  name: "ProductList",
  data() {
    return {
      product: {
        Id: 1,
        Name: "First product",
        Price: 100,
        Quantity: 5
      }
    };
  },

  components: {
    product
  }
};
</script>

<style scoped>
</style>
