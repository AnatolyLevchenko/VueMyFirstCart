import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import routes from './routes'
import products from '../store/modules/products'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes
})

Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});


export const store = new Vuex.Store({
  modules: {
    products
  },
})




new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')