<template>
  <div class="col">
    <div class="row">
      <ProductItem v-for="p in filteredProducts" :product="p" :key="p.Id"></ProductItem>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    },
    ...mapState({ products: state => state.products.all })
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>

<style>
</style>