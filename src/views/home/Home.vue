<template>
    <div >
      <div class="landing-page"></div>

        <div class="container-fluid">
        <div class="row">
            <div :class="hasCartItems? 'col-md-12 col-lg-8 col-sm-12': 'col-md-12 col-lg-12 col-sm-12'">
                <!-- <div class="banner-bootom-w3-agileits">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-5 bb-grids bb-left-agileits-w3layouts">
                            <router-link to="/"><div class="bb-left-agileits-w3layouts-inner">
                                <h3>Air Swimmers</h3>
                                <h4>For <span>Kids</span></h4>
                            </div></router-link>
                        </div>
                        <div class="col-md-4 bb-grids bb-middle-agileits-w3layouts">
                            <router-link to="/"><div class="bb-middle-top">
                                <h3>Matte Lipstick</h3>

                            </div></router-link>
                            <router-link to="/"><div class="bb-middle-bottom">
                                <h3>Brazzilian Hair</h3>

                            </div></router-link>
                        </div>
                        <div class="col-md-3 bb-grids bb-right-agileits-w3layouts">
                            <router-link to="/accessories"><div class="bb-right-top">
                                <h3>Leather Belts</h3>

                            </div>
                            </router-link>
                            <router-link to="/hair"><div class="bb-right-bottom">
                                <h3>T444z Hair food</h3>

                            </div>
                            </router-link>
                        </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div> -->
                <div class="container">
                    <h1>Best sellers</h1>
                    <products></products>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-6  home-products">
                        <div class="product-image">
                            <img src="../../assets/images/couch1.png" alt="">
                            <p><span class="fa fa-cart-plus"></span> Add To Cart</p>
                        </div>
                        <div class="product-caption">
                            <h4><a href="product.html">Blue Sofa</a></h4>
                            <p>Kshs. 40,000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 home-products">
                        <div class="product-image">
                            <img src="../../assets/images/couch2.png" alt="">
                            <p><span class="fa fa-cart-plus"></span> Add To Cart</p>
                        </div>
                        <div class="product-caption">
                            <h4><a href="product.html">Cream Sofa</a></h4>
                            <p>Kshs. 30,000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 home-products">
                        <div class="product-image">
                            <!-- <img src="../../assets/images/couch3.webp" alt=""> -->
                            <p><span class="fa fa-cart-plus"></span> Add To Cart</p>
                        </div>
                        <div class="product-caption">
                            <h4><a href="product.html">Black Couch</a></h4>
                            <p>Kshs. 35,000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 home-products">
                        <div class="product-image">
                            <!-- <img src="../../assets/images/table1.webp" alt=""> -->
                            <p><span class="fa fa-cart-plus"></span> Add To Cart</p>
                        </div>
                        <div class="product-caption">
                            <h4><a href="product.html">Wooden Coffee Table</a></h4>
                            <p>Kshs. 10,000</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-6 home-products">
                        <div class="product-image">
                            <img src="../../assets/images/table2.png" alt="">
                            <p><span class="fa fa-cart-plus"></span> Add To Cart</p>
                        </div>
                        <div class="product-caption">
                            <h4><a href="product.html">Wooden Shelf</a></h4>
                            <p>Kshs. 12,000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 home-products">
                        <div class="product-image">
                            <img src="../../assets/images/table3.png" alt="">
                            <p><span class="fa fa-cart-plus"></span> Add To Cart</p>
                        </div>
                        <div class="product-caption">
                            <h4><a href="product.html">Wooden Storage Table</a></h4>
                            <p>Kshs. 8,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-4 col-sm-12" v-if="hasCartItems">
                    <g-checkout></g-checkout>
            </div>
        </div>
        </div>
        <back-to-top>
          <i class="icon-top"></i>
        </back-to-top>
    </div>
</template>
<script>
import { getTopProducts } from '../../api'
import BackToTop from '../../components/BackToTop'
// var easyResponsiveTabs =require()
export default{
  name: 'home',
  components: {BackToTop},
  data () {
    return {
    }
  },
  methods: {
    getTopProducts () {
      getTopProducts({}).then((res) => {
        window.console.log(res)
      })
    }
  },
  mounted () {

  },
  computed: {
    hasCartItems () {
      return this.$store.state.cart.items.length > 0
    }
  }
}
</script>

<style>
    .tales {
        width: 100%;
    }
    .landing-page {
      background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url("../../assets/images/f3-1.jpg");
      padding: 220px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .home-products {
      text-align: center;
      padding: 0;
    }

    .home-products .product-image {
      border: 0.5px solid #A9A9A9;
      padding-top: 50px;
      min-height: 220px;
      max-height: 220px;
    }

    .home-products .product-image>img {
      width: 90%;
    }

    .product-image>p {
      visibility: visible;
      opacity: 0;
      position: absolute;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.7);
      top: 0;
      left: 0;
      width: 100%;
      height: 80%;
      padding-top: 30%;
      font-size: 20px;
      -webkit-transition: all 500ms;
      -moz-transition: all 500ms;
      -o-transition: all 500ms;
      transition: all 500ms;
    }

    .product-image:hover>p {
      visibility: visible;
      opacity: 1;
      -webkit-transition: all 500ms;
      -moz-transition: all 500ms;
      -o-transition: all 500ms;
      transition: all 500ms;
    }

    .product-caption>h4>a {
      color: black;
      -webkit-transition: all 500ms;
      -moz-transition: all 500ms;
      -o-transition: all 500ms;
      transition: all 500ms;
    }

    .product-caption>h4>a:hover {
      -webkit-transition: all 500ms;
      -moz-transition: all 500ms;
      -o-transition: all 500ms;
      transition: all 500ms;
    }
    .row {
      margin: 0;
    }
</style>
