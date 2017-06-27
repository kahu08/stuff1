/**
 * Created by kevyn on 20/06/2017.
 */

export const cartItems = state => {
  return state.cart.items
}

export const canCheckOut = state => {
  return false
}

export const cartTotal = state => {
  const sum = cartItems(state).reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity
  }, 0)
  return sum
}
export default {
}
