<template>
    <div class="mine">
        <router-view></router-view> 
        <mt-tabbar fixed>
            <mt-tab-item
                v-for="nav in navs"
                :key="nav.id"
            >
            <router-link active-class="active" :to="{name:nav.name}">
                <i :class="['fa', 'fa-'+nav.icon]"></i>
                {{nav.title}}
            </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navs:[
                    {id:1,title:'商品列表',icon:'list',name:'list'},
                    {id:2,title:'购物车',icon:'shopping-cart',name:'car'}
                ]
            }
        }
    }
</script>

<style lang="scss">
    .mint-tab-item{
        padding: 18px 0;
    }
    .active{
        color:orange
    }
    .mint-cell-title{
        overflow: hidden;
        white-space:normal;
        text-overflow: ellipsis;
    }
    .mint-cell-wrapper{
        background: transparent;
    }
    .mint-cell-label{
        padding: .1rem 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>