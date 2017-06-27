<template>
    <div>
        <div class="newsletter">
            <div class="container">
                <div class="col-md-6 w3agile_newsletter_left">
                    <h2>Newsletter</h2>
                    <p>For the latest offers and products, Be the first to know.</p>
                </div>
                <div class="col-md-6 w3agile_newsletter_right">
                    <form action="#" method="post">
                        <input type="email" name="Email" value="Email" onfocus="this.value = '';"
                               onblur="if (this.value == '') {this.value = 'Email';}" required="">
                        <input type="submit" value="Subscribe"/>
                    </form>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <!-- <footer class="footer-distributed">

            <div class="footer-right">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

            </div> -->

            <!-- <div class="footer-left">

                <p class="footer-links">
                    <router-link to="/">Home</router-link>
                    ·
                    <router-link  v-for="menu in menus" :key="menu.id" :to="`/categories/${menu.id}`">{{ menu.name }} ·  </router-link>

                    <router-link to="/contact-us">Contact Us</router-link>
                </p>

                <p>Jumba &copy; 2017. All Rights Reserved</p>
            </div> -->
            <!-- </footer> -->
            <footer>
                <h5> &#169 Jumba 2017</h5>
            </footer>
    </div>
</template>

<script>
import {getCategoriesMenu} from '../../api/index'
export default {
  name: 'g-footer',
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
    }
  },
  mounted () {
    this.getCategoriesMenu()
  }
}
</script>
<style scoped>
footer {
  border-top: 0.5px solid #A9A9A9;
  text-align: center;
  padding: 10px;
}
</style>
