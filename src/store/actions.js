/**
 * Created by kevyn on 20/06/2017.
 */
export const addToCart = ({ commit }, product) => {
  commit('ADD_TO_CART', product)
}

export const removeQuantityFromCart = ({ commit }, product) => {
  commit('REMOVE_QUANTITY_FROM_CART', product.id)
}

export const addQuantityToCart = ({ commit }, product) => {
  commit('ADD_QUANTITY_TO_CART', product.id)
}
export const updateItemQuantity = ({ commit }, product) => {
  commit('UPDATE_ITEM_QUANTITY', product)
}
export const removeFromCart = ({ commit }, product) => {
  commit('REMOVE_FROM_CART', product)
}

export default {
}
