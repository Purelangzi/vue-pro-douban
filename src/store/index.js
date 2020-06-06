import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 让vue内部可以使用vuex插件库 vuex全局状态管理工具

// import state from './Num/states'
// import getters from './Num/getters'
// import mutations from './Num/mutations'
// import actions from './Num/actions'
// export default new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions
// })

import Num from './Num'
import myCar from './MyCar'
export default new Vuex.Store({
  modules:{
    Num,
    myCar
  }
})