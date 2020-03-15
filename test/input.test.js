const exepect = chai.expect
import Vue from 'vue'
import Input from '../src/Input.vue'
//TDD 测试驱动开发
describe("Input", () => {
  it("Input存在", () => {exepect(Input).to.exist})
  describe("props可传", () => {
    const Constructor = Vue.extend(Input)
    let vm = {}
    afterEach(() => {
      vm.$destroy()
    })

    it("value可传", () => {
      vm = new Constructor({
        propsData: {
          value: "李四"
        }
      }).$mount()
      const inputEl = vm.$el.querySelector("input")
      expect(inputEl.value).to.eq('李四')
    })
    it('disabled可传',()=>{
      vm = new Constructor({
        propsData:{
          disabled:true
        }
      }).$mount()
      const inputEl=vm.$el.querySelector("input")
      exepect(inputEl.disabled).to.eq(true)
    })
    it('readonly可传',()=>{
      vm = new Constructor({
        propsData:{
          readonly:true
        }
      }).$mount()
      const  inputEl=vm.$el.querySelector("input")
      exepect(inputEl.readOnly).to.eq(true)
    })
    it("error,message可传", () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useEl = vm.$el.querySelector("use")
      exepect(useEl.getAttribute('xlink:href')).to.eq('#icon-error')
      const errorMessage = vm.$el.querySelector(".errorMessage")
      exepect(errorMessage.innerText).to.eq('你错了')
    })
  })
  describe("监听input上的部分事件", () => {
    it("支持 change/input/focus/blur 事件", () => {
      const events = ['change', 'input', 'focus', 'blur'] //表驱动编程
      events.forEach((eventName) => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        //触发input的change事件
        const event = new Event(eventName)
        Object.defineProperty(event,'target',{
          value:{value:'hi'}
        })
        const inputEl = vm.$el.querySelector("input")
        inputEl.dispatchEvent(event)
        exepect(callback).to.have.been.calledWith('hi')
        vm.$destroy()
      })

    })

  })
})