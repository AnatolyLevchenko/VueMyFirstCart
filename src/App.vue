<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" class="brand">Simple Ecommerce</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-navbar>

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Your cart</h1>
        </div>
      </section>
      <product-list></product-list>
    </div>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: {
    ProductList
  }
};
</script>

<style>
.brand {
  margin-left: 100px;
}
.navbar-band {
  font-weight: bold;
}
</style>
