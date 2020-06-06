import {CHANGE_NUM,RANDOM_NUM} from './const'
export default {
    [CHANGE_NUM](state){ // 只能在mutation这个对象里面挂载一些更改数据的方法！
        state.num ++ // 更改了state里的数据
    },
    [RANDOM_NUM](state,randomNum){
        state.num = randomNum
    }
}