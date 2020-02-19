import CartList from "./components/CartList.vue";
import ProductList from "./components/ProductList.vue";

export default [{
        path: '/',
        component: ProductList,
        name: "default"
    }, {
        path: '/cart',
        component: CartList
    },

]