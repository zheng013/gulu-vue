const exepect=chai.expect
import Vue from 'vue'
import Input from '../src/Input.vue'
//TDD 测试驱动开发
describe('input存在',()=>{
  exepect(Input).to.exist

  describe('props可传',()=>{

  })

})