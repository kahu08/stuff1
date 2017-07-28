<template>

  <div class="my-nav navbar-fixed-top">
    <div class="container">
      <div class="hamburger-menu">
          <a @click="on()"><span class="fa fa-bars" aria-hidden="true"></span></a>
      </div>
      <div class="overlay" id="my-overlay">

        <div class="overlay-content">
          <i class="fa fa-times" aria-hidden="true" @click="off()"></i>
            <ul>
              <li v-for="menu in menus"><router-link :to="`/categories/${menu.id}`">{{ menu.name }}</router-link></li>
              <li class=""><router-link to="/cart" class="hyper "><span>Cart({{ getItemsCount }})</span></router-link></li>
              <li class=""><router-link to="/contact-us" class="hyper "><span>Contact</span></router-link></li>
            </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-3 brand-name">
          <h1><a href="/">JUMBA</a></h1>
        </div>
        <div class="col-md-9 col-sm-9 nav-links">
          <!-- the categories will appear as a dropdown of the menu -->
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu <span class="fa fa-bars"></span></a>
                <ul class="dropdown-menu">
                    <li v-for="menu in menus"><router-link :to="`/categories/${menu.id}`">{{ menu.name }}</router-link></li>
                </ul>
            </li>
          </li>
            <li class=""><router-link to="/cart" class="hyper "><span>Cart({{ getItemsCount }})</span></router-link></li>
            <li class=""><router-link to="/contact-us" class="hyper "><span>Contact</span></router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { getCategoriesMenu } from '../../api'
import $ from 'jquery'
import chunk from '../../../node_modules/chunk'
export default {
  name: 'g-header',
  data () {
    return {
      menus: []
    }
  },
  methods: {
    getCategoriesMenu () {
      getCategoriesMenu({}).then((res) => {
        this.menus = res.data.data
      })
    },
    organizeMenu (menu) {
      return chunk(menu, 2)
    },
    off () {
      document.getElementById('my-overlay').style.display = 'none'
    },
    on () {
      $('#my-overlay').addClass('animated slideInLeft')
      document.getElementById('my-overlay').style.display = 'block'
    }
  },
  mounted () {
    this.getCategoriesMenu()
    $('.dropdown').hover(
      function () {
        $('.dropdown-menu', this).stop(true, true).slideDown('fast')
        $(this).toggleClass('open')
      },
    function () {
      $('.dropdown-menu', this).stop(true, true).slideUp('fast')
      $(this).toggleClass('open')
    })
  },
  created () {
    $(document).scroll(function () {
      var $nav = $('.navbar-fixed-top')
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
    })
    $(document).scroll(function () {
      var $logo = $('.navbar-brand')
      $logo.remove($(this).scrollTop() > $.height())
    })
  },
  computed: {
    getItemsCount () {
      var items = this.$store.state.cart.items
      var count = 0
      for (var item of items) {
        count += item.quantity
      }
      return count
    }
  }
}
</script>

<style scoped>
.navbar-fixed-top.scrolled {
  background-color: #fff !important;
  transition: background-color 200ms linear;
}
.my-nav{
  width: 100%;
  position: fixed;
  z-index: 10;
  -webkit-transition: all 500ms;
-moz-transition: all 500ms;
-o-transition: all 500ms;
transition: all 500ms;
}

.my-nav a{
  color: black;
  text-transform: uppercase;

}
.my-nav:hover{
  background-color: white;
  -webkit-transition: all 500ms;
-moz-transition: all 500ms;
-o-transition: all 500ms;
transition: all 500ms;
}

.brand-name h1{
  padding: 10px 0;
  text-align: left;
  font-weight: bolder;
  font-size: 50px;
}
.nav-links {
  padding: 25px 0;
text-align: right;
 }
  .nav-links li {
    display: inline-block;
    padding: 0 10px;
  list-style: none;
  font-size: 10px;
}
input {
  border: 0;
  padding: 5px;
}

input, button {
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.2);
  border-radius: 20px;
}

.overlay {
  display: none;
  font-size: 30px;
  position: absolute;
  top: 15px;
  left: 35px;
}

.overlay-content {
  /*display: none;*/
   width: 50%;
   position: fixed;
   z-index: 10;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.9);
   text-align: center;
   font-size: 20px;
}

.overlay i {
  float: right;
  margin: 15px;
}

.overlay-content span {
  color: white;
}

.overlay ul {
  margin: 70px 0;
  list-style: none;
  padding: 0;
}

.overlay li {
  padding: 5px;
}

.overlay i {
  color: white;
  float: right;
  margin: 15px;
}

@media only screen and (max-width: 426px) {
  .overlay {
    display: block;
  }
  .nav-links {
    display: none;
  }
  .brand-name h1 {
    text-align: center;
  }
}
</style>
