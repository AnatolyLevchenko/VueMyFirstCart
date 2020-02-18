<template>
  <div class="row align-items-center">
    <div class="col-1">
      <img src="https://dummyimage.com/50x50/55595c/fff" />
    </div>
    <div class="col-2">
      <span>{{product.Name}}</span>
    </div>
    <div class="col-2">
      <span>{{product.Quantity}}</span>
    </div>
    <div class="col-2">
      <span>{{product.Price|toCurrency}}</span>
    </div>
    <div class="col">
      <button class="btn btn-sm btn-danger">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      required: true
    }
  }
};
</script>

<style>
</style>