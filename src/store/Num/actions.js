import {RANDOM_NUM} from './const' 
export default {
    getNumFromBackEnd(ctx){
        //异步请求数据，1s后回来数据
        setTimeout(() => {
           let random = Math.floor(Math.random()*100)
           // 相当于mutationsd的RANDOM_NUM方法被执行了，传参random
           ctx.commit(RANDOM_NUM,random)
        }, 1000);
    }
}