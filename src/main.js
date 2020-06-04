import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 加载通用样式
import './stylesheets/main.scss'
// 引入rem.js
import './modules/rem'
// 引入swiper.min.css样式文件
import '../node_modules/swiper/css/swiper.min.css'

import axios from 'axios'
Vue.prototype.$axios = axios // 方便以后在组件中通过this.$axios获取axios

// 引入mint-ui组件库里面需要的一些组件
import { InfiniteScroll, Header, Button } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.component('mt-header', Header);
Vue.component('mt-button', Button);
// 引入自定义指令
import './modules/directive'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')