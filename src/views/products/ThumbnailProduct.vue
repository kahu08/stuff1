<template>

  <div class="col-md-3 col-sm-6 home-products">
      <div class="product-image">
          <img :src="product.image_url" :alt="product.name">
          <p><span class="fa fa-cart-plus" @click="addToCart(product)"></span> Add To Cart</p>
           <!-- <button type="button" @click="addToCart(product)" class="fa fa-cart-plus"><icon name="shopping-cart"></icon>  Add to cart</button> -->
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
