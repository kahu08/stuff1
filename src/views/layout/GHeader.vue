<template>
<div class="header-bottom-w3ls">
    <div class="container-fluid">
        <div class="navigation-agileits">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">Jumba</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                      <li class="search-agileinfo">
                        <div class="input-group">
                          <input type="search" name="Search" placeholder="Search for a Product..." required="">
                          <button type="submit" class="btn search" aria-label="Left Align">
                            <icon name="search" style="color:white; margin-top: 10%; margin-bottom: 1%;"></icon>
                          </button>
                        </div>
                      </li>
                        <li class=""><router-link to="/contact-us" class="hyper "><span>Contact</span></router-link></li>
                        <li class=""><router-link to="/" class="hyper "><span>Log In / Register</span></router-link></li>
                        <li class=""><router-link to="/cart" class="hyper "><span>Cart</span></router-link></li>
                        <li v-for="menu in menus" v-bind:class="{'dropdown': menu.children.length>0}" >
                        <router-link :to="menu.children.length==0?`/categories/${menu.id}`:``" v-bind:class="{'dropdown-toggle': menu.children.length>0}" class="hyper" data-toggle="dropdown" >
                            {{ menu.name }}
                        </router-link>
                            <ul class="dropdown-menu multi" v-if="menu.children.length>0">
                                <div class="row">
                                    <div class="col-sm-4" v-for="columnMenu in organizeMenu(menu.children)">
                                        <ul class="multi-column-dropdown" >
                                            <li v-for="menuC in columnMenu">
                                                <router-link :default-active="$route.path" :to="`/categories/${menuC.id}`">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                    {{ menuC.name }}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-4 w3l">
                                        <router-link :to="`/categories/${1}`">
                                            <img :src="menu.image_url" class="img-responsive" alt="">
                                        </router-link>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <!-- <div class="col-md-1 cart-wthree">
            <div class="cart">
                <form action="#" method="post" class="last">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                </form>
            </div>
        </div> -->
        <div class="clearfix"></div>
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
  }
}
</script>

<style scoped>
.navbar-default {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0;
  text-transform: uppercase;
  border: 0;
  margin: 0;
  padding: 5px 0;
  -webkit-transition: all 500ms;
  -moz-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
}

.navbar-default:hover {
  background-color: rgb(255, 255, 255);
  -webkit-transition: all 500ms;
  -moz-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
}


/* Title */

.navbar-default .navbar-brand, .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {
  color: black;
  font-size: 45px;
  font-weight: bolder;
}


/* Link */

.navbar-default .navbar-nav>li>a, .navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-nav>li>a:focus {
  color: black;
}


/*navbar dropdown stretched across the screen*/


/*.nav>li.dropdown.open {
  position: static;
}

.nav>li.dropdown.open .dropdown-menu {
  display: table;
  width: 100%;
  text-align: center;
  left: 0;
  right: 0;
}

.dropdown-menu>li {
  display: table-cell;
}*/


/* Mobile version */

.navbar-default .navbar-toggle {
  border-color: #DDD;
}

.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
  background-color: #DDD;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #CCC;
}

@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu>li>a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover, .navbar-default .navbar-nav .open .dropdown-menu>li>a:focus {
    color: #333;
  }
}
    .navbar-right{
        display: inline;
    }

</style>
