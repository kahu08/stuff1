<template>
    <div class="w3ls_dresses_grid_left_grid">
        <h3>Checkout</h3>
        <div class="w3ls_dresses_grid_left_grid_sub">
            <div class="ecommerce_color">
                <h4>Select payment method</h4>
                <div class="tabbable-panel">
                    <div class="tabbable-line">
                        <ul class="nav nav-tabs-custom">
                            <li class="active">
                                <a href="#mobile-payment" @click="updatePaymentMethod(0)" data-toggle="tab">
                                    <h4>Mobile</h4></a>
                            </li>
                            <li>
                                <a href="#card-payment" @click="updatePaymentMethod(1)" data-toggle="tab">
                                    <h4>Card</h4></a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="mobile-payment">
                                <div class="panel">
                                    <div class="panel-body" :disabled="orderProcessing">
                                    <form role="form">
                                        <div class="form-group">
                                            <label for="phone_number">Phone number</label>
                                            <div class="input-group">
                                                <input id="phone_number" v-on:change="updateCheckoutPhone" v-model="paymentPhone" placeholder="07XX-XXXXXX"  type="tel" class="checkout-input">
                                            </div>
                                        </div>
                                    </form>
                                        <div class="row align-items-center">
                                            <div class="offset-sm-2 col-md-3 col-sm-4 col-lg-3">
                                            <img src="../../assets/images/mpesa.png" height="35" width="65"/>
                                            </div>
                                            <div class="offset-sm-2 col-md-3 col-sm-4 col-lg-3">

                                            <img src="../../assets/images/airtel.png" height="35" width="65"/>
                                        </div>
                                            <div class="offset-sm-2 col-md-3 col-sm-4 col-lg-3">

                                            <img src="../../assets/images/orange.png" height="45" width="63"/>
                                    </div>
                                            <div class="offset-sm-2 col-md-3 col-sm-4 col-lg-3">

                                            <img src="../../assets/images/equitel.png" height="35" width="63"/>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <div class="tab-pane" id="card-payment">
                                <div class="panel">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="offset-3 col-md-6">
                                                <img class="text-center" height="40" width="180"
                                                     src="http://i2.wp.com/calroofingsystems.com/wp-content/uploads/2012/03/visa-mastercard-logo.jpg?fit=848%2C276">
                                                </div>
                                            </div>

                                        <form role="form" id="card-payment-form" data-vv-scope="card-payment-form">
                                            <div class="form-group">
                                                <label for="phone_number">Full name</label>
                                                <div class="input-group">
                                                    <input id="name" v-validate="'required'" placeholder="Full name"  type="text" class="checkout-input">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="phone_number">Email address</label>
                                                <div class="input-group">
                                                    <input id="email"  v-validate="'required|email'" placeholder="Email"  type="text" class="checkout-input">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="cardNumber">Card number</label>
                                                <div class="input-group">
                                                    <input type="text" class="checkout-input" id="cardNumber"  v-validate="'required|credit_card'" placeholder="Card number"
                                                           required autofocus />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-7 col-md-7 col-lg-7">
                                                    <div class="form-group">
                                                        <label for="expityMonth">Expiry date</label>
                                                        <div class="input-group">
                                                            <div class="col-xs-6 col-lg-6 col-md-6">
                                                                <select name="card" id="expityMonth" placeholder="MM" class="checkout-input select" v-validate="'required'">
                                                                    <option value="01">01</option>
                                                                    <option value="02">02</option>
                                                                    <option value="03">03</option>
                                                                    <option value="04">04</option>
                                                                    <option value="05">05</option>
                                                                    <option value="06">06</option>
                                                                    <option value="07">07</option>
                                                                    <option value="08">08</option>
                                                                    <option value="09">09</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-xs-6 col-lg-6 col-md-6">
                                                                <select name="card" placeholder="YY" class="checkout-input select"   v-validate="'required'">
                                                                    <option value="2017">17</option>
                                                                    <option value="2018">18</option>
                                                                    <option value="2019">19</option>
                                                                    <option value="2020">20</option>
                                                                    <option value="2021">21</option>
                                                                    <option value="2022">22</option>
                                                                    <option value="2013">23</option>
                                                                    <option value="2014">24</option>
                                                                    <option value="2015">25</option>
                                                                    <option value="2016">26</option>
                                                                    <option value="2016">27</option>
                                                                </select>
                                                           </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-5 col-md-5 col-lg-5">
                                                    <div class="form-group">
                                                        <label for="cvCode">CVC</label>
                                                        <input type="password" class="checkout-input" id="cvCode" placeholder="CVC" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">

                    </div>
                </div>
                <h4 v-if="!authenticated">Checkout as</h4>
                <div class="tabbable-panel" v-if="!authenticated">
                    <div class="tabbable-line">
                        <ul class="nav nav-tabs-custom" :disabled="orderProcessing">
                            <li class="active">
                                <a href="#guest_checkout" @click="updateCheckoutMethod(0)" data-toggle="tab">
                                    <h4>Guest</h4></a>
                            </li>
                            <li>
                                <a href="#returning_user_checkout" @click="updateCheckoutMethod(0)" data-toggle="tab">
                                    <h4>Returning User</h4></a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="guest_checkout">
                                <div class="panel">
                                    <div class="panel-body" :disabled="orderProcessing">
                                        <form role="form">
                                            <div class="form-group">
                                                <label>Same as payment phone</label>
                                                <div class="input-group">
                                                  <input type="checkbox" v-model="samePhone" v-on:change="updatePaymentPhone"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="phone_number">Phone number</label>
                                                <div class="input-group">
                                                    <input id="checkout_phone" v-model="checkoutPhone" placeholder="07XX-XXXXXX"  type="tel" class="checkout-input">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <div class="tab-pane" id="returning_user_checkout">
                                <div class="panel">
                                    <div class="panel-body">
                                        <div class="toolbar button-group" :disabled="orderProcessing">
                                            <div class="row">
                                                <div class="col-md-6 col-lg-6 col-sm-6">
                                                    <button type="button" class="login-button">Login</button>
                                                </div>
                                                <div class="col-md-6 col-lg-6 col-sm-6">
                                                    <button type="button" class="register-button">Register</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="offset-md-3 offset-sm-3 offset-lg-3 col-md-6 col-lg-6 col-sm-6">
                        <button type="submit" @click="orderSubmit" :disabled="canCheckout || orderProcessing" class="order-button">
                            <icon name="shopping-cart" v-if="!orderProcessing"></icon>
                            <icon name="refresh" v-if="orderProcessing" spin></icon>
                            {{ orderProcessing? 'Processing...':'Pay' }}
                        </button>
                    </div>
                    <div class="col-md-4 col-lg-4 col-sm-4">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-lg-4 col-sm-4 offset-md-4 offset-sm-4 offset-lg-4">
                        <img height="50" style="padding: 10px;" width="60" src="http://nouveta.tech/wp-content/uploads/2017/03/logo.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer pw-by-nouveta">
            <p >Powered by Nouveta</p>
            <p >&copy; 2017</p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
// import $ from 'jquery'
// import vmodal from 'vue-js-modal'
// import config from '../../../config'
// Vue.use(vmodal)
import { checkout } from '../../api'
Vue.use(VeeValidate)
export default{
  components: {},
  name: 'g-checkout',
  data () {
    return {
      samePhone: false,
      card: {
      },
      paymentPhone: '',
      checkoutPhone: '',
      orderProcessing: false
    }
  },
  methods: {
    updatePaymentPhone () {
      this.$store.commit('UPDATE_PAYMENT_PHONE', this.paymentPhone)
      if (this.samePhone) {
          // Same Phone
        this.checkoutPhone = this.paymentPhone
        this.$store.commit('UPDATE_CHECKOUT_PHONE', this.checkoutPhone)
      }
    },
    updateCheckoutPhone () {
      this.$store.commit('UPDATE_CHECKOUT_PHONE', this.checkoutPhone)
    },
    orderSubmit () {
      var cart = this.$store.state.cart.items
      this.$store.commit('UPDATE_CART_ITEMS', cart)
      var data = this.$store.state.checkout
      if (this.$store.state.checkout.payment_method === 0) {
         // Validate Phone
        if (this.$store.state.checkout.payment_phone.length === 0) {
          window.alert('Enter phone number to complete payment')
        } else {
          // djhd
          this.completeOrder(data)
        }
      } else {
        // Validate Card
        this.completeOrder(data)
      }
    },
    getCustomer (checkoutMethod) {
      if (checkoutMethod === 1) {
          // Registered
        return false
      } else {
        if (this.$store.state.checkout.checkoutPhone.length === 0) {
          window.alert('Enter checkout phone number to complete order.')
          return false
        } else {
          return true
        }
      }
    },
    completeOrder (data) {
      // window.console.log(data)
      this.orderProcessing = true
      checkout(data).then((res) => {
        window.console.log(data)
        this.orderProcessing = false
        this.$store.commit('RESTORE_CART', [])
      })
    },
    updateCheckoutMethod (v) {
      this.$store.commit('UPDATE_CHECKOUT_METHOD', v)
    },
    updatePaymentMethod (v) {
      this.$store.commit('UPDATE_PAYMENT_METHOD', v)
    }
  },
  computed: {
    items () {
      return this.$store.state.cart.items
    },
    authenticated () {
      return this.$store.state.profile.loggedIn
    },
    canCheckout () {
      // window.alert(this.$store.state.cart.items.length <= 0)
      return this.$store.state.cart.items.length <= 0
    }
  },
  created () {
    this.$store.commit('UPDATE_CHECKOUT_METHOD', 0)
    this.$store.commit('UPDATE_PAYMENT_METHOD', 0)
    // window.alert(this.items.length)
  },
  watch: {
    'paymentPhone': function (val, oldVal) {
      if (this.samePhone) {
        this.checkoutPhone = this.paymentPhone
      }
    }
  }
}
</script>

<style>
    .select{
        height: 46px;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.3333333;
    }
    .login-button{
        width: 100%;
        font-weight: 300;
        padding: 0.6em 0;
        -webkit-transition: .5s all;
        -moz-transition: .5s all;
        -o-transition: .5s all;
        -ms-transition: .5s all;
        transition: .5s all;
        display: inline-block;
        background: #4CAF50;
        outline: none;
        border: 1px solid #4CAF50;
        color: #fff;
    }
    .register-button{
        width: 100%;
        font-weight: 300;
        padding: 0.6em 0;
        -webkit-transition: .5s all;
        -moz-transition: .5s all;
        -o-transition: .5s all;
        -ms-transition: .5s all;
        transition: .5s all;
        display: inline-block;
        background: #F44336;
        outline: none;
        border: 1px solid #F44336;
        color: #fff;
    }
    .order-button{
           width: 100%;
           font-weight: 300;
           padding: 0.6em 0;
           -webkit-transition: .5s all;
           -moz-transition: .5s all;
           -o-transition: .5s all;
           -ms-transition: .5s all;
           transition: .5s all;
           display: inline-block;
           background: #e60073;
           outline: none;
           border: 1px solid #e60073;
           color: #fff;
       }
    .contact input[type="text"] input[type="tel"] {
        padding: 10px;
        background: transparent;
        border: 1px solid #000;
        margin: 10px 14px 13px 0px;
        color: #000;
        outline: none;
    }
    input, button, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
    input {
        line-height: normal;
    }
    button, input, optgroup, select, textarea {
        margin: 0;
        font: inherit;
        color: inherit;
    }
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .pw-by-nouveta {
        padding-right: -20px;
        margin-right: 7.5%;
        margin-left: 7.5%;
        height: 50px;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #ff5500;
        color: rgba(255,255,255,.8);
    }
    .card {
        padding: -10px;
    }
    .checkout-input{
        outline: none;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        color: #212121;
        font-size: 14px;
        width: 100% !important;
        background: #fff;
        border: 1px solid #DBDBDB;
        float: left;
    }
    /* Tabs panel */
    .tabbable-panel {
        width: 100%;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    .nav-tabs-custom{
        width: 100%;
    }
    .nav-tabs-custom > ul.nav.nav-tabs-custom > li {
        float: none;
        display: table-cell;
    }
    .tabbable-line .nav li {
        width: 100%;
    }
    h3 :before{
        content: '' !important;
        background: #e60073 !important;
        width: 10% !important;
        height: 2px !important;
        position: absolute !important;
        top: 50% !important;
        left: 0% !important;
    }
    /* Default mode */
    .tabbable-line > .nav-tabs-custom {
        border: none;
        width: 100%;
        margin: 0px;
    }
    .tabbable-line > .nav-tabs-custom > li {
        margin-right: 2px;
    }
    .tabbable-line > .nav-tabs-custom > li > a {
        border: 0;
        margin-right: 0;
        color: #737373;
    }
    .tabbable-line > .nav-tabs-custom > li > a > i {
        color: #a6a6a6;
    }
    .tabbable-line > .nav-tabs-custom > li.open, .tabbable-line > .nav-tabs-custom > li:hover {
        border-bottom: 4px solid #F48FB1;
    }
    .tabbable-line > .nav-tabs-custom > li.open > a, .tabbable-line > .nav-tabs-custom > li:hover > a {
        border: 0;
        background: none !important;
        color: #333333;
    }
    .tabbable-line > .nav-tabs-custom > li.open > a > i, .tabbable-line > .nav-tabs-custom > li:hover > a > i {
        color: #a6a6a6;
    }
    .tabbable-line > .nav-tabs-custom > li.open .dropdown-menu, .tabbable-line > .nav-tabs-custom > li:hover .dropdown-menu {
        margin-top: 0px;
    }
    .tabbable-line > .nav-tabs-custom > li.active {
        border-bottom: 4px solid #e60073;
        position: relative;
    }
    .tabbable-line > .nav-tabs-custom > li.active > a {
        border: 0;
        color: #333333;
    }
    .tabbable-line > .nav-tabs-custom > li.active > a > i {
        color: #404040;
    }
    .tabbable-line > .tab-content-custom {
        margin-top: -3px;
        background-color: #fff;
        border: 0;
        border-top: 1px solid #eee;
        padding: 15px 0;
    }
    .portlet .tabbable-line > .tab-content-custom {
        padding-bottom: 0;
    }

    /* Below tabs mode */

    .tabbable-line.tabs-below > .nav-tabs-custom > li {
        border-top: 4px solid transparent;
    }
    .tabbable-line.tabs-below > .nav-tabs-custom > li > a {
        margin-top: 0;
    }
    .tabbable-line.tabs-below > .nav-tabs-custom > li:hover {
        border-bottom: 0;
        border-top: 4px solid #fbcdcf;
    }
    .tabbable-line.tabs-below > .nav-tabs-custom > li.active {
        margin-bottom: -2px;
        border-bottom: 0;
        border-top: 4px solid #f3565d;
    }
    .tabbable-line.tabs-below > .tab-content {
        margin-top: -10px;
        border-top: 0;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
    }
</style>
