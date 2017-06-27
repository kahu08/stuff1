/**
 * Created by kevyn on 20/06/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../../src/store/actions'
import getters from '../../src/store/getters'
import cart from '../../src/store/modules/cart'
import profile from '../../src/store/modules/profile'
import checkout from '../../src/store/modules/checkout'

Vue.use(Vuex)
var store = new Vuex.Store({
  actions: actions,
  getters: getters,
  modules: {
    cart,
    profile,
    checkout
  }
})

export default store
