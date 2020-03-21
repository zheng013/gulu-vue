import Toast from './Toast.vue'
let currentToast


export default {
   install(Vue,options){
     Vue.prototype.$toast=function (message,toastOptions) {
       if (currentToast) {
         currentToast.close()
       }

       currentToast = createToast(Vue, message, toastOptions)
       currentToast.$on('close', () => {
         currentToast = null
       })
     }
  }
}

function createToast(Vue,message,toastOptions) {
  const Constructor=Vue.extend(Toast)
  const toast=new Constructor({
    propsData:toastOptions
  })
  toast.$slots.default=[message]
  toast.$mount()    //toast只是一个对象，我们需要将其元素放到页面上
  document.body.appendChild(toast.$el)
  return toast
}