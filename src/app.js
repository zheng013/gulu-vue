import Vue from "vue"
import Button from "./Button.vue"
import ButtonGroup from "./ButtonGroup"
import Input from "./Input"
import Row from "./Row"
import Col from "./Col"

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-clo',Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    message:'0'
  }
})


