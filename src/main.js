import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入rem
import "./modules/rem"
//引入fastclick
import "./modules/fastclick"
Vue.config.productionTip = false
//引入axios
import axios from "axios"
Vue.prototype.$http = axios;
//引入全局minit-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//引入animation-css库
import "animate.css"
//引入directive
import "./modules/directive"
//引入swiper的样式文件
import "swiper/css/swiper.min.css"
// import "swiper/js/swiper"
// import Swiper from 'swiper'
// Vue.use(Swiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
