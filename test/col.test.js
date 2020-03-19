const expect = chai.expect
import Vue from "vue"
import Col from '../src/Col.vue'

describe("Col", () => {
  it("存在", () => {
    expect(Col).to.exist
  })
  describe('可接收Class', () => {
    const Constructor = Vue.extend(Col)
    let vm = {}
    afterEach(() => {
      vm.$destroy()
    })
    it('span可传', () => {
      vm = new Constructor({
        propsData: {
          span: 12
        }
      }).$mount()
      expect(vm.$el.classList.contains("col-12")).to.eq(true)
    })
    it("offset可传", () => {
      vm = new Constructor({
        propsData: {
          offset: 4
        }
      }).$mount()
      expect(vm.$el.classList.contains('offset-4')).to.eq(true)
    })
    it("ipad可传", () => {
      vm = new Constructor({
        propsData: {
          ipad: {span: 2, offset: 4}
        }
      }).$mount()
      expect(vm.$el.classList.contains('col-ipad-2')).to.eq(true)
      expect(vm.$el.classList.contains('col-ipad-offset-4')).to.eq(true)
    })
    it("narrowPc可传", () => {
      vm = new Constructor({
        propsData: {
          narrowPc: {
            span: 4, offset: 4
          }
        }
      }).$mount()
      expect(vm.$el.classList.contains('col-narrow-pc-4')).to.eq(true)
      expect(vm.$el.classList.contains('col-narrow-pc-offset-4')).to.eq(true)
    })
    it("pc可传",()=>{
      vm=new Constructor({
        propsData:{
          pc:{span:3,offset:3}
        }
      }).$mount()
      expect(vm.$el.classList.contains('col-pc-3')).to.eq(true)
      expect(vm.$el.classList.contains('col-pc-offset-3')).to.eq(true)
    })
    it("widePc可传",()=>{
      vm=new Constructor({
        propsData:{
          widePc:{span:2,offset:2}
        }
      }).$mount()
      expect(vm.$el.classList.contains('col-wide-pc-2')).to.eq(true)
      expect(vm.$el.classList.contains('col-wide-pc-offset-2')).to.eq(true)
    })
  })
})