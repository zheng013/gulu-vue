import Vue from "vue"
import Button from "./Button.vue"
import ButtonGroup from "./ButtonGroup"
import Input from "./Input"
import Row from "./Row"
import Col from "./Col"
import Layout from "./Layout"
import Header from "./Header"
import Content from "./Content"
import Sider from "./Sider"
import Footer from "./Footer"
import Plugin from './plugin.js'

Vue.use(Plugin)

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-clo', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    message: '0'
  },
  created() {
    this.$toast('大家好',{
      closeButton:{
        text:'关闭',
        callback(toast){
           console.log(toast.log())
        }
      }
    })
  },
  methods: {
    showToast() {
      this.$toast('大家好')
    }
  }
})


