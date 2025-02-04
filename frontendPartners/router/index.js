import { createRouter, createWebHistory } from 'vue-router';
import Products from '../src/views/Products.vue';
import AddProduct from '../src/views/AddProduct.vue';

const routes = [
  { path: '/', component: Products },
  { path: '/add-product', component: AddProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;