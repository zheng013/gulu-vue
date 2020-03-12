import Vue from "vue"
import Button from "./Button.vue"
import ButtonGroup from "./ButtonGroup"

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false
  }
})


//单元测试
import chai from 'chai'

const expect = chai.expect

// 单元测试button
{
  const Constructor = Vue.extend(Button)//得到一个构造函数
  const vm = new Constructor({    //去创建一个实例进行测试
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()

  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-settings')
  vm.$el.remove()
  vm.$destroy()
}

//测试loading状态
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'download',
      loading: true
    }
  })
  vm.$mount()
  const useElement = vm.$el.querySelector("use")
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}

//测试添加了iconPosition
{
  const div=document.createElement("div")
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
      iconPosition:'right'
    }
  })
  vm.$mount(div)

  const svg = vm.$el.querySelector("svg")
  const {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}