<template>
  <div class="col">
    <div class="row">
      <ProductItem v-for="p in products" :product="p" :key="p.Id"></ProductItem>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  components: {
    ProductItem
  },
  data() {
    return {
      products: [
        {
          Id: 1,
          Price: 200,
          Title: "Mobile Phone 1",
          Description: "Product Description",
          CategoryId: 1
        },
        {
          Id: 2,
          Price: 400,
          Title: "Mobile Phone 2",
          Description: "Product Description",
          CategoryId: 1
        },
        {
          Id: 3,
          Price: 1000,
          Title: "Mobile Phone 3",
          Description: "Product Description",
          CategoryId: 1
        },
        {
          Id: 4,
          Price: 500,
          Title: "Mobile Phone 4",
          Description: "Product Description",
          CategoryId: 1
        }
      ]
    };
  }
};
</script>

<style>
</style>