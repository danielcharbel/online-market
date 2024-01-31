import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    data: { pageTitle: 'onlineMarketApp.product.home.title' },
    loadChildren: () => import('./product/product.routes'),
  },
  {
    path: 'product-category',
    data: { pageTitle: 'onlineMarketApp.productCategory.home.title' },
    loadChildren: () => import('./product-category/product-category.routes'),
  },
  {
    path: 'customer-details',
    data: { pageTitle: 'onlineMarketApp.customerDetails.home.title' },
    loadChildren: () => import('./customer-details/customer-details.routes'),
  },
  {
    path: 'shopping-cart',
    data: { pageTitle: 'onlineMarketApp.shoppingCart.home.title' },
    loadChildren: () => import('./shopping-cart/shopping-cart.routes'),
  },
  {
    path: 'product-order',
    data: { pageTitle: 'onlineMarketApp.productOrder.home.title' },
    loadChildren: () => import('./product-order/product-order.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
