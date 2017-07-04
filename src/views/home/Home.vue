<template>
    <div>
      <div class="landing-page"></div>

        <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12'">
                <div class="container">
                    <h1>BEST SELLERS</h1>
                    <products></products>
                </div>
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
h1 {
  font-weight: bolder;
font-size: 30px;
padding: 20px 0;
}
    .tales {
        width: 100%;
    }
    .landing-page {
      margin-top: -80px !important;
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
