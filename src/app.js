import Vue from "vue"
import Button from "./Button.vue"
Vue.component('g-button',Button)
new Vue({
  el: '#app',
  data:{
    loading1:false,
    loading2:false
  }
})