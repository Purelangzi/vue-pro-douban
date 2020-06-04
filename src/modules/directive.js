import Vue from 'vue'

// 注册全局的自定义指令 v-backtop
Vue.directive('backtop', {
    bind(el,binding,vnode){
        let eventType = binding.arg || 'click'
        el.addEventListener(eventType,e=>{
            window.scrollTo(0,0)
        }) 
    }
})