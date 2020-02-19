import CartList from "./components/CartList.vue";
import ProductList from "./components/ProductList.vue";
import CategoriesList from "./components/CategoriesList.vue"

export default [{
        path: '/',
        component: ProductList,
        name: "default"
    }, {
        path: '/cart',
        component: CartList
    },
    {
        path: '/categories',
        component: CategoriesList
    },

]