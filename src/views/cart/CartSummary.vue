<template>
    <ul class="list-group">
        <li class="list-group-item">
            <h4>Subtotal <strong> {{ cartTotal | formatMoney('Kshs. ') }} </strong>
            </h4>   <!--({{itemsQuantity}} {{'item' | pluralize(itemsQuantity) }}):{{subtotal  }}-->
        </li>
    <li class="list-group-item">
        <h4><strong>Total: </strong>
                <strong v-if="!totalDiscount">{{cartTotal | formatMoney('Kshs. ') }}</strong>
              <span v-if="totalDiscount">
                <strike> {{cartTotal | formatMoney('Kshs. ') }}</strike>
                <strong> {{totalWithDiscount | formatMoney('Kshs. ') }}</strong>
            </span>
        </h4>
        </li>
    </ul>
</template>

<script>
export default{
  name: 'g-cart-summary',
  data () {
    return {
      totalDiscount: false
    }
  },
  computed: {
    cartTotal () {
      let cartTotal = this.$store.getters.cartTotal
      return cartTotal
    },
    totalWithDiscount () {
      return 0.00
    }
  }
}
</script>
