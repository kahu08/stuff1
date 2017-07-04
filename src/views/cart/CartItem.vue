<template>
    <div>
        <li class="cart-items">
          <div class="row">
              <div class="col-md-4 product-image">
                <img :src="item.image_url">
              </div>
              <div class="col-md-5 product-caption">
                  <h4><strong>{{ item.name }}</strong></h4>
                  <p>{{ item.order_options }}</p>

                  <p>Number: {{ item.quantity }} item(s)</p>
              </div>
              <div class="col-md-3 product-price">
                  <p>Kshs. {{ item.price }}</p>
                  <button type="button" class="btn remove" @click="removeFromCart(item)">Remove</button>
              </div>
          </div>
            <!-- <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <img :src="item.image_url" class="img-cart img-responsive" width="40" height="60">
                </div>
                    <div class="col-sm-8 col-md-8 col-lg-8">
                        <div class="row">
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <h5 class="cart_text"><strong>{{ item.name }}</strong></h5>
                                <br/>
                                {{ item.order_options }}
                                <h5 class="cart_text">{{ item.quantity }} x {{ item.price }}</h5>
                            </div>
                        <div class="col-sm-5 col-md-5 col-lg-5">

                            <div class="input-group">
                                  <span class="input-group-btn">
                                      <button type="button" class="btn-qty btn-number btn" @click="removeItemQuantity(item)" data-type="minus">
                                          <span class="glyphicon glyphicon-minus"></span>
                                      </button>
                                  </span>
                                  <input type="text" disabled  class="input-qty" :value="item.quantity">
                                    <span class="input-group-btn">
                                          <button type="button" class="btn-qty btn-number btn" @click="addItemQuantity(item)" data-type="plus">
                                              <span class="glyphicon glyphicon-plus"></span>
                                          </button>
                                      </span>
                            </div>

                        </div>
                    </div>
                        <br/>
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-sm-6" v-for="option in item.options">
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
                </div>
                <div class="col-md-1 col-sm-1 col-xs-1">
                    <button type="button" class="close"
                            @click="removeFromCart(item)">
                        &times;
                    </button>
                </div>
            </div> -->
        </li>
        <hr/>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default{
  name: 'g-cart-item',
  props: ['item'],
  methods: {
    removeFromCart (item) {
      this.$store.commit('REMOVE_FROM_CART', item)
    },
    updateProductOption (productOption) {
      window.alert(productOption)
    },
    addItemQuantity (item) {
      this.$store.commit('ADD_ITEM_QUANTITY', item)
    },
    removeItemQuantity (item) {
      this.$store.commit('REMOVE_ITEM_QUANTITY', item)
    },
    ...mapActions([
      'addQuantityToCart',
      'removeQuantityFromCart',
      'updateItemQuantity'
    ])
  }
}
</script>

<style scoped>

/*body {
  padding-top: 60px;
}*/

.cart-items {
  padding-bottom: 50px;
}

.cart-items .product-image>img {
  width: 90%;
}

.cart-items .product-price, .total {
  text-align: right;
}

.remove:hover {
  background-color: red;
}

/*.input-qty{
    width: 100%;
    padding-left: 10px;
    text-align: center;
    border: none;
}
.btn-qty{

}
.cart_text{
    text-align: left;
    float: left;
}
.option-button{
    width: 100%;
    font-weight: 300;
    padding: 5px;
    margin: 5px;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    -o-transition: .5s all;
    -ms-transition: .5s all;
    transition: .5s all;
    display: inline-block;
    outline: none;
    border: 1px solid #e60073;
    color: #111;
}*/
</style>
