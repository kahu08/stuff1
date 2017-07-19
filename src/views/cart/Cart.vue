<template>
    <div>
        <h1>CART</h1>
        <div class="w3ls_dresses_grid_left_grid_sub">
            <div class="ecommerce_color">
                <ul class="list-group" v-for="item in items">
                    <g-cart-item :item="item"></g-cart-item>
                </ul>
            </div>

            <div class="total" v-if="hasCartItems">
                  <g-cart-summary></g-cart-summary>
                  <button type="submit" v-if="!isCheckingOut" @click="proceedToCheckout" class="order-button" style="float:right; margin-left:2em; ">
                    Proceed to checkout
                  </button>

                    <button type="submit" v-if="!isCheckingOut" @click="clearCart" class="order-button" style="float:right;">
                        Clear Cart
                    </button>
                    <g-checkout></g-checkout>
            </div>
        </div>
    </div>
</template>

<script>
import GCartItem from './CartItem'
// import {mapGetters} from 'vuex'

export default{
  components: {GCartItem},
  name: 'g-cart',
  data () {
    return {
    }
  },
  methods: {
    proceedToCheckout () {
      this.$store.commit('PROCEED_TO_CHECKOUT', true)
    },
    clearCart () {
      this.$store.commit('RESTORE_CART', [])
    }
  },
  computed: {
    items () {
      return this.$store.state.cart.items
    },
    hasCartItems () {
      return this.$store.state.cart.items.length > 0
    },
    isCheckingOut () {
      return this.$store.state.checkout.is_checking_out
    }
  },
  created () {
    // window.alert(this.items.length)
  }
}
</script>

<style>
h1 {
  font-weight: bolder;
font-size: 30px;
}
  .list-group{
      border: none !important;
  }
  .list-group-item{
      border: none !important;
 }
 /*.total {
   text-align: right;
 }*/
</style>
