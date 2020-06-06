import { SYNC_UPDATE } from './const'
export default {
    initCar(ctx) {
        let cars = getCar()
        ctx.commit(SYNC_UPDATE, cars)
    },
    // 添加到购物车
    addGoodIncars(ctx, goodInfo) {
        setTimeout(() => {
            // 获取后台返回来的购物车
            let cars = getCar() //[] [{},{}]
            let isHas = cars.some(item => {
                // 数组内每个商品对象id与外部传入的商品的id是否一致
                if (item.CommodityId == goodInfo.CommodityId) {
                    item.num++ // 数量加一
                    return true
                }
            })
            if (!isHas) { // 外部传入的商品在cars数组里不存在
                goodInfo.num = 1 //数量变为一
                cars.push(goodInfo) // 追加到cars数组
            }
            // 通知后台更改cars（相当于数据库的cars改了）
            localStorage.cars = JSON.stringify(cars)
            // 前端将vuex里的cars更改(默认空数组)
            ctx.commit(SYNC_UPDATE, cars)
        }, 500);
    },
    // 从购物车移除
    reduceGoodIncars(ctx, goodInfo) {
        let cars = getCar()
        cars = cars.filter(item => { //删除数组中某些元素，false就是过滤掉元素
            if (item.CommodityId == goodInfo.CommodityId) {
                item.num-- // 数量减一
                if(item.num<=0) return false
            }
            return true
        })
        // 通知后台更改cars（相当于数据库的cars改了）
        localStorage.cars = JSON.stringify(cars)
        // 前端将vuex里的cars更改(默认空数组)
        ctx.commit(SYNC_UPDATE, cars)
    }
}

function getCar() {
    return JSON.parse(localStorage.cars ? localStorage.cars : '[]')
}