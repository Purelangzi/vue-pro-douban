<template>
    <div class="tabbar">
        <Item
            v-for="item in footer"
            :key="item.id"
            :txt="item.txt"
            :mark="item.mark"
            :sel="selected"
        >
            <img slot="normalImg" :src="item.normalImg">
            <img slot="activeImg" :src="item.activeImg">
        </Item>
    </div>
</template>

<script>
    import Item from './item'
    export default {
        data() {
            return {
                selected:this.$route.name,
                footer:[
                    {id:1,txt:'首页',mark:'home',activeImg:require('../../assets/ic_tab_home_active.png'),normalImg:require('../../assets/ic_tab_home_normal.png')},
                    {id:2,txt:'书影音',mark:'audio',activeImg:require('../../assets/ic_tab_audio_active.png'),normalImg:require('../../assets/ic_tab_audio_normal.png')},
                    {id:3,txt:'广播',mark:'broadcast',activeImg:require('../../assets/ic_tab_broadcast_active.png'),normalImg:require('../../assets/ic_tab_broadcast_normal.png')},
                    {id:4,txt:'小组',mark:'group',activeImg:require('../../assets/ic_tab_group_active.png'),normalImg:require('../../assets/ic_tab_group_normal.png')},
                    {id:5,txt:'我的',mark:'mine',activeImg:require('../../assets/ic_tab_mine_active.png'),normalImg:require('../../assets/ic_tab_mine_normal.png')},
                ]
            }
        },
        components:{
            Item
        }
    }
</script>

<style lang="scss">
    .tabbar{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        display: flex;
        border-top: 1px solid #e1dcdc;
        background: #fff;
    }
</style>