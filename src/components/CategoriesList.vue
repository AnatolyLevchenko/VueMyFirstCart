<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 col-sm-3">
          <category-filter></category-filter>
        </div>
        <ProductsGrid></ProductsGrid>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryFilter from "./CategoryFilter";
import ProductsGrid from "./ProductsGrid";
export default {
  components: {
    CategoryFilter,
    ProductsGrid
  }
};
</script>

<style>
</style>