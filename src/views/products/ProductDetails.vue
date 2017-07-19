<template lang="html">
  <div class="content">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-6 product">
                          <div class="product-image">
                              <img :src="`http://localhost:8082/public/${product.image_url}`" alt="">
                          </div>
                      </div>
                      <div class="col-md-3">
                          <h2>Product Details</h2>
                          <br>
                          <br>
                          <p v-html="product.description"></p>
                      </div>
                      <div class="col-md-3">
                          <h3>Order</h3>
                          <form class="form-group">
                              <input type="number" value="1">
                          </form>

                        <!-- chose option of item -->
                          <form class="form-group">

                              <label for="">Color</label>
                              <br>
                              <input type="radio" name="colour" value="Black" checked>Black<br>
                              <input type="radio" name="colour" value="Blue">Blue<br>
                              <input type="radio" name="colour" value="White">White
                          </form>
                          <div class="row">
                              <div class="col-md-6 col-lg-6 col-sm-6" v-for="option in product.options">
                                  <h5><strong>{{ option.name }}</strong></h5>
                                  <div>
                                      <select  class="option-button" v-model="option.option_id">
                                          <option :input="updateProductOption"  v-for="item_option in option.product_options" :value="item_option.id" :key="item_option.id"  :selected="option.option_id==item_option.id">
                                              {{ item_option.name }}
                                          </option>
                                      </select>
                                  </div>
                              </div>
                          </div>
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
