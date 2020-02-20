<template>
  <div class="card bg-light mb-3">
    <div class="card-header bg-primary text-white text-uppercase">
      <i class="fa fa-list"></i> Categories
    </div>
    <ul class="list-group category_block">
      <li class="list-group-item">
        <router-link :to="'/categories/'">All</router-link>
      </li>
      <li v-for="item in categories" :key="item.Id" class="list-group-item">
        <router-link :to="'/categories/'+item.Id">{{item.Name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          Name: "Phones",
          Id: 1
        },
        {
          Name: "Computers",
          Id: 2
        },
        {
          Name: "Cars",
          Id: 3
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
</style>