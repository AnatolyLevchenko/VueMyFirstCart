<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col">
        <div v-for="p in products" :key="p.Id" class="product-item">
          <product :product="p"></product>
        </div>
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
      products: [
        {
          Id: 1,
          Name: "Telephone",
          Price: 100,
          Quantity: 5
        },
        {
          Id: 2,
          Name: "TV",
          Price: 333,
          Quantity: 5
        },
        {
          Id: 3,
          Name: "Computer",
          Price: 1024,
          Quantity: 5
        }
      ]
    };
  },

  components: {
    product
  }
};
</script>

<style scoped>
.product-item {
  margin-bottom: 5px;
}
</style>
