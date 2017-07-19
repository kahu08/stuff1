<template>
  <div id="app">
      <g-header></g-header>
      <div class="body">
    <router-view></router-view>
      <g-footer></g-footer>
    </div>
    <button @click="topFunction" id="myBtn" title="Go to top">Back to Top</button>

  </div>
</template>

<script>
import GHeader from '../src/views/layout/GHeader'
import GFooter from '../src/views/layout/GFooter'
import Sidebar from '../src/views/layout/GSidebar'
// import $ from 'jquery'

export default {
  name: 'app',
  components: [GHeader, Sidebar, GFooter],
  mounted () {

  },
  created () {
  // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      this.scrollFunction()
    }
  //   function scrollFunction () {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //       document.getElementById('myBtn').style.display = 'block'
  //     } else {
  //       document.getElementById('myBtn').style.display = 'none'
  //     }
  //   }
  //
  // // When the user clicks on the button, scroll to the top of the document
  //   function topFunction () {
  //     document.body.scrollTop = 0 // For Chrome, Safari and Opera
  //     document.documentElement.scrollTop = 0 // For IE and Firefox
  //   }
  },
  methods: {
    scrollFunction () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('myBtn').style.display = 'block'
      } else {
        document.getElementById('myBtn').style.display = 'none'
      }
    },
    topFunction () {
      document.body.scrollTop = 0 // For Chrome, Safari and Opera
      document.documentElement.scrollTop = 0 // For IE and Firefox
    }
  }
}
</script>
<style scoped>
#myBtn{
  z-index: 99;
  border: none;
  outline: none;
  float: right;
}
#myBtn:hover {
    background-color: #555; /* Add a dark-grey background on hover */
}
    .body {
      padding-top: 80px;
    }
    .newsletter{
        margin-top: 100px;
    }
    #flipkart-navbar {
        background-color: #ff0188;
        color: #FFFFFF;
    }

    .row1{
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .row2 {
        padding-bottom: 20px;
    }

    .flipkart-navbar-input {
        padding: 11px 16px;
        border-radius: 2px 0 0 2px;
        color: black;
        border:solid 1px black;
        background: #ffffff;
        outline: 0 none;
        font-size: 15px;
    }

    .flipkart-navbar-button {
        background-color: #e60073;
        border: 1px solid #e60073;
        border-radius: 0 2px 2px 0;
        color: #ffffff;
        padding: 10px 0;
        height: auto;
        cursor: pointer;
    }

    .cart-button {
        background-color: transparent;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);
        padding: 2px 0;
        text-align: center;
        height: 41px;
        border-radius: 2px;
        font-weight: 500;
        width:120px;
        display: inline-block;
        color: #FFFFFF;
        text-decoration: none;
        color: inherit;
        border: none;
        outline: none;
    }

    .cart-button:hover{
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }

    .cart-svg {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        margin-right: 8px;
    }

    .item-number {
        border-radius: 3px;
        background-color: rgba(0, 0, 0, .1);
        height: 20px;
        padding: 3px 6px;
        font-weight: 500;
        display: inline-block;
        color: #fff;
        line-height: 12px;
        margin-left: 10px;
    }

    .upper-links {
        display: inline-block;
        padding: 0 11px;
        line-height: 23px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0;
        color: inherit;
        border: none;
        outline: none;
        font-size: 12px;
    }

    .dropdown {
        position: relative;
        display: inline-block;
        margin-bottom: 0px;
    }

    .dropdown:hover {
        background-color: #fff;
    }

    .dropdown:hover .links {
        color: #000;
    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .dropdown .dropdown-menu {
        position: absolute;
        top: 100%;
        display: none;
        background-color: #fff;
        color: #333;
        left: 0px;
        border: 0;
        border-radius: 0;
        box-shadow: 0 4px 8px -3px #555454;
        margin: 0;
        padding: 0px;
    }

    .links {
        color: #fff;
        text-decoration: none;
    }

    .links:hover {
        color: #fff;
        text-decoration: none;
    }

    .profile-links {
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        border-bottom: 1px solid #e9e9e9;
        box-sizing: border-box;
        display: block;
        padding: 0 11px;
        line-height: 23px;
    }

    .profile-li{
        padding-top: 2px;
    }

    .largenav {
        display: none;
    }

    .smallnav{
        display: block;
        margin: 20px;
    }

    .smallsearch{
        margin-left: 15px;
        margin-top: 15px;
    }

    .menu{
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        .largenav {
            display: block;
        }
        .smallnav{
            display: none;
        }
        .smallsearch{
            margin: 0px;
        }
        img{
            width: 50%;
            height: 60px;
        }
    }
    img{
        width: 100%;
        height: auto;
    }
    /*Sidenav*/
    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #fff;
        overflow-x: hidden;
        transition: 0.5s;
        box-shadow: 0 4px 8px -3px #555454;
        padding-top: 0px;
    }

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
        color: #fff;
    }

    @media screen and (max-height: 450px) {
        .sidenav a {font-size: 18px;}
    }

    .sidenav-heading{
        font-size: 36px;
        color: #fff;
    }
</style>
