<template>
  <div class="row align-items-center">
    <div class="col-1">
      <img src="https://dummyimage.com/50x50/55595c/fff" />
    </div>
    <div class="col-3">
      <span v-if="!editMode">{{product.Name}}</span>
      <b-form-input v-else v-model="product.Name"></b-form-input>
    </div>
    <div class="col-2">
      <span v-if="!editMode">{{product.Quantity}}</span>
      <b-form-input v-else v-model="product.Quantity"></b-form-input>
    </div>
    <div class="col-2">
      <span v-if="!editMode">{{product.Price|toCurrency}}</span>
      <b-form-input v-else v-model="product.Price"></b-form-input>
    </div>
    <div class="col">
      <a href="#" @click="toggleEditMode">
        <img :src="editMode?'../static/save.png':'../static/edit.png'" class="command-img" />
      </a>
      <a href="#">
        <img :src="'../static/delete.png'" class="command-img edit-button" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      editMode: false
    };
  },
  watch: {},
  props: {
    product: {
      required: true
    }
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
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