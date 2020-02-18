<template>
  <div class="row align-items-center">
    <div class="col-1">
      <img src="https://dummyimage.com/50x50/55595c/fff" />
    </div>
    <div class="col-3">
      <span v-if="!editMode">{{product.Name}}</span>
      <b-form-input v-else v-model="product.Name" required></b-form-input>
      <span v-if="wrongName" class="text-danger d-block">Min name length 3</span>
    </div>

    <div class="col-2">
      <span v-if="!editMode">{{product.Quantity}}</span>
      <b-form-input v-else v-model="product.Quantity" type="number" required></b-form-input>
      <span v-if="wrongQuantity" class="text-danger">Wrong quantity</span>
    </div>
    <div class="col-2">
      <span v-if="!editMode">{{formatedCurrency}}</span>
      <b-form-input v-else v-model="product.Price" type="number" required></b-form-input>
      <span v-if="wrongPrice" class="text-danger">Wrong price</span>
    </div>
    <div class="col">
      <a href="#" @click="toggleEditMode">
        <img :src="editMode?'../static/save.png':'../static/edit.png'" class="command-img" />
      </a>
      <span v-if="editMode">
        <a href="#" @click="cancelEdit">
          <img :src="'../static/delete.png'" class="command-img edit-button" />
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      editMode: false,
      tempProduct: null
    };
  },
  watch: {},
  computed: {
    formatedCurrency() {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      });
      return formatter.format(this.product.Price);
    },
    wrongName() {
      return this.product.Name.length < 3;
    },
    wrongQuantity() {
      return this.product.Quantity < 0 || this.product.Quantity > 10 * 1000;
    },
    wrongPrice() {
      return this.product.Price < 0;
    }
  },
  props: {
    product: {
      required: true
    }
  },
  methods: {
    toggleEditMode() {
      if (!this.editMode) this.tempProduct = { ...this.product };

      if (this.editMode) {
        if (this.wrongName) {
          return;
        }
        if (this.wrongQuantity) return;
        if (this.wrongPrice) return;
      }

      this.editMode = !this.editMode;
    },
    cancelEdit() {
      this.product.Name = this.tempProduct.Name;
      this.product.Quantity = this.tempProduct.Quantity;
      this.product.Price = this.tempProduct.Price;
      this.editMode = false;
    }
  }
};
</script>

<style>
.edit-button {
  padding-left: 15px;
}
.command-img {
  width: 50px;
  height: 50px;
}
</style>