// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
// import store from './vuex/store'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import GHeader from '../src/views/layout/GHeader.vue'
import GSidebar from '../src/views/layout/GSidebar.vue'
import GFooter from '../src/views/layout/GFooter.vue'
import Products from '../src/views/products/Products.vue'
import GCart from '../src/views/cart/Cart.vue'
import GCartItem from '../src/views/cart/CartItem.vue'
import GCartSummary from '../src/views/cart/CartSummary.vue'
import GCheckout from '../src/views/cart/Checkout.vue'
import ThumbnailProduct from '../src/views/products/ThumbnailProduct.vue'
import ProductsList from '../src/views/products/ProductsList.vue'
// import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/style/style.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import store from '../src/store'
import accounting from 'accounting'
import pluralize from 'pluralize'

Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)
// globally (in your main .js file)
Vue.config.productionTip = false
// Vue.use($)
Vue.use(Vuex)
Vue.use(BootstrapVue)

Vue.component('icon', Icon)
Vue.component('g-header', GHeader)
Vue.component('g-sidebar', GSidebar)
Vue.component('g-footer', GFooter)
Vue.component('g-cart', GCart)
Vue.component('g-cart-item', GCartItem)
Vue.component('g-cart-summary', GCartSummary)
Vue.component('g-checkout', GCheckout)
Vue.component('t-product', ThumbnailProduct)
Vue.component('l-products', ProductsList)
Vue.component('products', Products)

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    // next(/*{ path: '/login' }*/)
  } else {
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App),
  created () {
    // Restore Cart
    var cart = JSON.parse(window.localStorage.getItem('cart'))
    store.commit('RESTORE_CART', cart)
  }
}).$mount('#app')
