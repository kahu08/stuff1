<template>

  <div class="my-nav navbar-fixed-top">
    <div class="container">
  <div class="col-md-3 brand-name">
    <h1><a href="/">JUMBA</a></h1>
  </div>
  <div class="col-md-9 nav-links">

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
</style>
