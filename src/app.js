import Vue from "vue"
import Button from "./Button.vue"
import ButtonGroup from "./ButtonGroup"
import Input from "./Input"

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    message:0
  }
})


