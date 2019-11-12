import Vue from "vue"
//注册全局自定义指令 v-backtop  
//自定义指令的钩子函数   bind inserted update componentUpdated unbind
Vue.directive("backtop",{
    // bind(){
    //     console.log("bind")
    // },
    inserted(el,binding,vnode){
        // console.log("inserted")
        let eventClick = binding.arg || "click"
        el.addEventListener(eventClick,e=>{
            window.scrollTo(0,0)
        })
    },
    // unbind(){
    //     console.log("unbind")
    // }
})

