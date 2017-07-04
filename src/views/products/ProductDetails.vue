<template lang="html">
  <div class="content">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-6 product">
                          <div class="product-image">
                              <img src="images/couch1.png" alt="">
                          </div>
                      </div>
                      <div class="col-md-3">
                          <h2>{{ product.name }}</h2>
                          <p v-html="product.description"></p>
                      </div>
                      <div class="col-md-3">
                          <h3>Order</h3>
                          <form class="form-group">
                              <input type="number" value="1">
                          </form>
                          <form class="form-group">

                              <label for="">Color</label>
                              <br>
                              <input type="radio" name="colour" value="Black" checked>Black<br>
                              <input type="radio" name="colour" value="Blue">Blue<br>
                              <input type="radio" name="colour" value="White">White
                          </form>
                          <button @click="addToCart(product)">Add To Cart</button>
                      </div>
                  </div>
              </div>
          </div>
</template>

<script>
import { getProductDetails } from '../../api'
import store from '../../store'
export default {
  name: 'product-details',
  data () {
    return {
      product: null
    }
  },
  methods: {
    getProduct (id) {
      getProductDetails({id: id}).then((res) => {
        this.product = res.data.data
      })
    },
    addToCart (product) {
      store.commit('ADD_TO_CART', product)
    }
  },
  mounted () {
    var id = this.$route.params.id
    this.getProduct(id)
    // alert(id)
  }
}
</script>

<style lang="css">
</style>
