<template>
    <div class="container-fluid">
        <div class="row">
        <div class="col-md-2 col-lg-2 col-sm-12 w3ls_dresses_grid_left">
            <div class="w3ls_dresses_grid_left_grid">
                <h3>Categories</h3>
                <div class="w3ls_dresses_grid_left_grid_sub">
                    <div class="ecommerce_dres-type">
                        <ul v-if="childCategories.length>0">
                            <li v-for="category in childCategories">
                                <router-link :to="`/categories/${category.id}`">{{ category.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w3ls_dresses_grid_left_grid" v-for="option in categoryOptions">
                <h3>{{ option.name }}</h3>
                <div class="w3ls_dresses_grid_left_grid_sub">
                    <div :class="(option.name.toLowerCase()=='color')?'ecommerce_color':'ecommerce_size ecommerce_color' ">
                        <ul>
                            <li v-for="product_option in option.product_options">
                                <router-link :to="`?${option.id}=${product_option.id}`">
                                    <i v-if="option.name.toLowerCase()=='color'"></i>
                                    {{ product_option.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         <!--   <div class="w3ls_dresses_grid_left_grid">
                <h3>Size</h3>
                <div class="w3ls_dresses_grid_left_grid_sub">
                    <div class="ecommerce_color ecommerce_size">
                        <ul>
                            <li><a href="#">Medium</a></li>
                            <li><a href="#">Large</a></li>
                            <li><a href="#">Extra Large</a></li>
                            <li><a href="#">Small</a></li>
                        </ul>
                    </div>
                </div>
            </div>-->
            <div class="w3ls_dresses_grid_left_grid">
                <div class="dresses_img_hover">
                    <img src="images/offer3.jpg" alt=" " class="img-responsive" />
                    <div class="dresses_img_hover_pos">
                        <h4>Upto<span>30%</span><i>Off</i></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-12 women-dresses">
            <router-view></router-view>
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 w3ls_dresses_grid_left" v-if="hasCartItems">
            <g-cart></g-cart>
            <g-checkout></g-checkout>
        </div>
    </div>
    </div>
</template>
<script>
import { getChildCategories, getCategoryOptions } from '../../api'
import {mapGetters} from 'vuex'
export default{
  name: 'g-main',
  data () {
    return {
      childCategories: [],
      categoryOptions: [],
      hasCartItems: true
    }
  },
  methods: {
    getChildCategories () {
      var id = this.$route.params.id
      getChildCategories({id: id}).then((res) => {
        this.childCategories = res.data.data
      })
    },
    getCategoryOptions () {
      var id = this.$route.params.id
      getCategoryOptions({id: id}).then((res) => {
        this.categoryOptions = res.data.data
      })
    }
  },
  mounted () {
    this.getChildCategories()
    this.getCategoryOptions()
  },
  computed: mapGetters({
  }),
  updated () {
    // this.getChildCategories()
  },
  watch: {
    '$route': function (val, oldVal) {
      // window.alert('Changed')
      this.getChildCategories()
      this.getCategoryOptions()
      // this.getChildCategories()
    }
  }
}
</script>
