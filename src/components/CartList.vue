<template>
  <div>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Your cart</h1>
      </div>
    </section>
    <div class="container mb-4">
      <div class="row">
        <div class="col">
          <div v-for="p in products" :key="p.Id" class="product-item">
            <cartItem :product="p"></cartItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from "./CartItem";

export default {
  name: "CartList",
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
    cartItem
  }
};
</script>

<style scoped>
.product-item {
  margin-bottom: 5px;
}
</style>
