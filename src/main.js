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
import { InfiniteScroll, Header, Button, Tabbar, TabItem, Cell} from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.component('mt-header', Header);
Vue.component('mt-button', Button);
Vue.component('mt-tabbar', Tabbar);
Vue.component('mt-tab-item', TabItem);
Vue.component('mt-cell', Cell);



// 引入自定义指令
import './modules/directive'

new Vue({
  router, // 为了让路由组件可以访问 this.$route/this.$router
  store, // 为了让组件，可以通过 this.$store 获取仓库数据
  render: h => h(App)
}).$mount('#app')