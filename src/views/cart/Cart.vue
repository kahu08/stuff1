<template>
    <div class="w3ls_dresses_grid_left_grid">
        <h3>Cart</h3>
        <div class="w3ls_dresses_grid_left_grid_sub">
            <div class="ecommerce_color">
                <ul class="list-group" v-for="item in items">
                    <g-cart-item :item="item"></g-cart-item>
                </ul>
            </div>
            <g-cart-summary></g-cart-summary>
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
  },
  computed: {
    items () {
      return this.$store.state.cart.items
    }
  },
  created () {
    // window.alert(this.items.length)
  }
}
</script>

<style>
  .list-group{
      border: none !important;
  }
  .list-group-item{
      border: none !important;
 }
</style>
