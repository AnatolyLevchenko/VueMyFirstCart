<template>
  <div class="card bg-light mb-3">
    <div class="card-header bg-primary text-white text-uppercase">
      <i class="fa fa-list"></i> Categories
    </div>
    <ul class="list-group category_block">
      <li v-for="item in categories" :key="item" class="list-group-item">
        <a href="category.html">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Phones", "Computers", "Lamps", "Toys", "Cars"]
    };
  }
};
</script>

<style>
</style>