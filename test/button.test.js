import {describe} from "mocha"

const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/Button.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  //BDD  行为驱动测试 在写完代码之后进行测试
  it('存在.', () => {
    expect(Button).to.exist
  })
  describe("icon和事件",()=>{
    const Constructor=Vue.extend(Button)
    let vm={}
    afterEach(()=>{
      vm.$destroy()
    })
    it('可以设置icon.', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings')
    })
    it('可以设置loading.', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings',
          loading: true
        }
      }).$mount()
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    })

    it('设置 iconPosition 可以改变 order', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          icon: 'settings',
          iconPosition: 'right'
        }
      }).$mount(div)
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('2')
    })
    it('点击 button 触发 click 事件', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings',
        }
      }).$mount()

      const callback = sinon.fake();
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.been.called
    })
  })

})

