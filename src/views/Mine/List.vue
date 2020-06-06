<template>
    <div class="list">
        <mt-cell
            :title="good.CommodityName"
            :label="good.SubTitle"
            v-for="good in goods"
            :key="good.CommodityId"
            >
            <img slot="icon" :src="good.SmallPic">
            <span>￥{{good.SellPrice}}</span>
            <mt-button @click="addGoodIncars(good)">
                <i class="fa fa-cart-plus "></i>
            </mt-button>
        </mt-cell>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                goods:[]
            }
        },
        methods: {
            ...mapActions(['addGoodIncars'])
        },
        created() {
            this.$axios.get('/vue-douban/api/fruit.json').then(res => {
                this.goods = res.data.CommodityList
            })
        }
    }
</script>

<style lang="scss" scoped>
    .mint-cell{
        padding: 15px 5px;
        img{
            float: left;
            width: 1.05rem;
            height: 1.05rem;
        }
        .mint-button {
            width: .5rem;
            height: .4rem;
            margin-left: 10px;
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            border: 1px solid;
            border-radius: 25%;
            color: #d8c225;
            background: transparent;
            i{
                font-size: 18px;
            }
        }
    }
    .mint-cell-value span{
        color: #fd3d3d;
    }
</style>