import Vue from "vue"
import Button from "./Button.vue"
import ButtonGroup from "./ButtonGroup"
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
new Vue({
  el: '#app',
  data:{
    loading1:false,
    loading2:false
  }
})