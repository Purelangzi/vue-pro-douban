<template>
    <div class="car">
        <router-link to="/mine/list" v-if="goods.length == 0">
            <div class="nothing">购物车为空，点击添加商品</div>
        </router-link>
        <div v-else>
            <mt-cell
            :title="good.CommodityName"
            v-for="good in goods"
            :key="good.CommodityId"
            >
                <img slot="icon" :src="good.SmallPic">
                <span class="price">￥{{good.SellPrice}}</span>
                <mt-button @click="reduceGoodIncars(good)">
                    <i class="fa fa-minus-square-o "></i>
                </mt-button>
                <span>{{good.num}}</span>
                <mt-button @click="addGoodIncars(good)">
                    <i class="fa fa-plus-square-o "></i>
                </mt-button>
            </mt-cell>
            <div class="total">
                <p>总价格 {{computedTotal.price}}元</p>
                <p>总数量 {{computedTotal.num}}件</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapState({
                goods:state=>state.myCar.cars
            }),
            ...mapGetters(['computedTotal'])
        },
        methods: {
            ...mapActions(['addGoodIncars','reduceGoodIncars'])
        }
    }
</script>

<style lang="scss">
    .mint-cell{
        padding: 15px 5px;
        .mint-cell-wrapper{
            background: transparent;
        }
        img{
            float: left;
            width: 1.05rem;
            height: 1.05rem;
        }
        .mint-button{
            background: transparent;
            i{
                font-size: 22px;
            }
            box-shadow:0 0 0px;
            color: #d8c225;
        }
    }
    .mint-cell-value span{
        color: #fd3d3d;
    }
    .mint-cell-value .price{
        position: absolute;
        left: 33%;
        bottom: 20%;
    }
    .mint-cell-title{
        white-space:normal
    }
    .total{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 60px;
        height: .6rem;
        font-size: 18px;
        color: #fff;
        background: gray;
    }
    .nothing{
        margin: 200px auto;
        text-align: center;
        width: 3rem;
        height: 1rem;
        line-height: 1rem;
        font-size: .2rem;
    }
</style>