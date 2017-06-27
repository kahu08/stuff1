/**
 * Created by kevyn on 21/06/2017.
 */
const state = {
  loggedIn: false
}

const mutations = {
  LOG_IN (state, profile) {
    window.localStorage.setItem('logged_in', true)
    window.localStorage.setItem('profile', profile)
  },
  LOG_OUT (state, profile) {
    window.localStorage.setItem('logged_in', false)
    window.localStorage.setItem('profile', null)
  }
}
export default {
  state,
  mutations
}
