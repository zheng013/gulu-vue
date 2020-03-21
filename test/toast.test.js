const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/Toast.vue'

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })

  it('可传autoClose', (done) => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
      propsData: {
        autoClose: 1
      }
    }).$mount(div)
    setTimeout(() => {
      expect(document.body.contains(toast.$el)).to.eq(false)
      toast.$el.remove()
      toast.$destroy()
      done()
    }, 1500)
  })
  it('可传closeButton', () => {
    const callback = sinon.fake()
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        closeButton: {
          text: '哈哈',
          callback
        }
      }
    }).$mount()
    const closeButton = vm.$el.querySelector('.close')
    closeButton.click()
    expect(closeButton.textContent).to.eq('哈哈')
    expect(callback).to.have.been.called
    vm.$destroy()
  })
  it('enableHtml', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        enableHtml: true
      }
    })
    vm.$slots.default = [`<strong id="test">hi</strong>`]
    vm.$mount()
    expect(vm.$el.querySelector('#test')).to.exist
    vm.$destroy()
  })
  it('可传position',()=>{
    const Constructor=Vue.extend(Toast)
    const vm=new Constructor({
      propsData:{
        position:'middle'
      }
    }).$mount()
    expect(vm.$el.classList.contains('position-middle')).to.eq(true)
    vm.$destroy()
  })
})