<template>

  <div class="col-md-3 col-sm-6 home-products">
      <div class="product-image">
          <img :src="product.image_url" :alt="product.name">
          <p @click="addToCart(product)">
            <span class="fa fa-cart-plus" ></span>
             Add To Cart
           </p>
      </div>
      <div class="product-caption">
          <h4><a href="product.html">{{ product.name }}</a></h4>
          <p>Kshs. {{ product.price}}</p>
      </div>
  </div>

</template>

<script>
import store from '../../store'
export default{
  name: 'thumbnail-product',
  props: ['product'],
  methods: {
    addToCart (product) {
      store.commit('ADD_TO_CART', product)
    }
  }
}
</script>
