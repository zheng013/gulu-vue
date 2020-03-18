const expect = chai.expect
import Vue from 'vue'
import Row from '../src/Row.vue'
import Col from "../src/Col"

describe('Row', () => {
  it('Row存在', () => {
    expect(Row).to.exist
  })
  it('gutter可传', (done) => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
    <g-row gutter="20">
    <g-col>1</g-col>
    <g-col>2</g-col>
    </g-row>
`
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })
  it('align可传', () => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    expect(getComputedStyle(vm.$el).justifyContent).to.eq('flex-end')
    vm.$el.remove()
    vm.$destroy()
  })
})