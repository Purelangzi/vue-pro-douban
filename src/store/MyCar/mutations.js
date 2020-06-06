import { SYNC_UPDATE } from './const'
export default {
    // 只需action那边传入一个新cars，就可以将vuex里的cars重新赋值
    [SYNC_UPDATE](state, newCars) { 
        state.cars = newCars
    }
}