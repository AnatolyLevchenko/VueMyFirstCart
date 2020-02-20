<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
      <img
        class="card-img-top"
        src="https://dummyimage.com/600x400/55595c/fff"
        alt="Card image cap"
      />
      <div class="card-body">
        <h4 class="card-title">
          <a href="product.html" title="View Product">{{product.Title}}</a>
        </h4>
        <p class="card-text">{{product.Description}}</p>
        <div class="row">
          <div class="col">
            <p class="btn btn-danger btn-block">{{product.Price|toCurrency}}</p>
          </div>
          <div class="col">
            <a href="#" class="btn btn-success btn-block">Add to cart</a>
          </div>
        </div>
      </div>
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