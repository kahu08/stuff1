/**
 * Created by kevyn on 20/06/2017.
 */
import store from '../../store'

const state = {
  items: [],
  total: 100
}

const mutations = {
  ADD_TO_CART (state, product) {
    var productId = product.id
    const inCart = state.items.find(items => items.id === productId)
    // window.alert(inCart)
    if (inCart) {
        // In Cart. Add to options too
      inCart.quantity++
    } else {
        // Not In Cart
      // var options = product.options
      var options = []
      // window.console.log(product.options)
      for (let p of product.options) {
        // var p = product.options[i]
        var pr = {
          id: p.id,
          name: p.name,
          option_id: 0,
          price: 0.00,
          quantity: 0,
          required: p.required,
          product_options: []
        }
        options.push(pr)
        for (let opo of p.product_options) {
          pr.product_options.push({
            id: opo.id,
            name: opo.name,
            price: opo.price
          })
        }
      }
      state.items.push({
        // Select Options
        id: product.id,
        name: product.name,
        image_url: product.image_url,
        price: product.price,
        quantity: 1,
        options: options
      })
      // window.console.log(options)
    }
    window.localStorage.setItem('cart', JSON.stringify(state.items))
  },
  RESTORE_CART (state, cart) {
    if (cart === null) {
      store.commit('RESTORE_CART', [])
      return
    }
    state.items = cart
    window.localStorage.setItem('cart', JSON.stringify(state.items))
  },
  ADD_ITEM_QUANTITY (state, product) {
    // Add
    const inCart = state.items.find(items => items.id === product.id)
    inCart.quantity++
  },
  REMOVE_ITEM_QUANTITY (state, product) {
    // Remove
    const inCart = state.items.find(items => items.id === product.id)
    inCart.quantity--
    if (inCart.quantity === 0) {
      store.commit('REMOVE_FROM_CART', inCart)
    }
  },
  REMOVE_FROM_CART (state, product) {
    const index = state.items.findIndex(items => items.id === product.id)
    state.items.splice(index, 1)
    window.localStorage.setItem('cart', JSON.stringify(state.items))
  }
}

export default {
  state,
  mutations
}
