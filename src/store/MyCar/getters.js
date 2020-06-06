export default {
    // 计算总价和总数量
    computedTotal(state) {
        let cars = state.cars
        let total = { price: 0, num: 0 }
        cars.forEach(item => {
            total.price += item.SellPrice * item.num
            total.num += item.num
        })
        // 总价四舍五入保留两位小数
        total.price = total.price.toFixed(2)
        return total
    }
}