/**
 * Created by kevyn on 22/06/2017.
 */
const state = {
  items: [],
  checkout_method: 0,
  payment_method: 0,
  profile: null,
  card: null,
  checkout_phone: '',
  payment_phone: ''
}
const mutations = {
  UPDATE_CHECKOUT_METHOD (state, checkoutAs) {
    state.checkout_method = checkoutAs
  },
  UPDATE_PAYMENT_METHOD (state, paymentMethod) {
    state.payment_method = paymentMethod
  },
  UPDATE_CART_ITEMS (state, cart) {
    state.items = cart
  },
  UPDATE_PAYMENT_CARD_DETAILS (state, card) {
    state.card = card
  },
  UPDATE_CHECKOUT_PHONE (state, phone) {
    state.checkout_phone = phone
  },
  UPDATE_PAYMENT_PHONE (state, phone) {
    state.payment_phone = phone
  }
}
export default {
  state,
  mutations
}
