<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" class="brand">Simple Ecommerce</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
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
