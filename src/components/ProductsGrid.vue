<template>
  <div class="col">
    <div class="row">
      <ProductItem v-for="p in filteredProducts" :product="p" :key="p.Id"></ProductItem>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  components: {
    ProductItem
  },
  computed: {
    filteredProducts() {
      let id = this.$route.params.id;
      if (!id) return this.products;

      return this.products.filter(p => p.CategoryId == id);
    }
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
        },
        {
          Id: 5,
          Price: 500,
          Title: "Lapetop",
          Description: "Product Description",
          CategoryId: 2
        },
        {
          Id: 6,
          Price: 500,
          Title: "Modern PC",
          Description: "Product Description",
          CategoryId: 2
        },
        {
          Id: 7,
          Price: 500,
          Title: "Car 1",
          Description: "Product Description",
          CategoryId: 3
        },
        {
          Id: 7,
          Price: 500,
          Title: "Car 2",
          Description: "Product Description",
          CategoryId: 3
        }
      ]
    };
  }
};
</script>

<style>
</style>