<template>
    <div class="tabbar">
        <Item txt="首页" mark="home" :sel="selected">
            <img slot="normalImg" src="../../assets/ic_tab_home_normal.png">
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png">
        </Item>
        <Item txt="书影音" mark="audio" :sel="selected">
            <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png">
            <img slot="activeImg" src="../../assets/ic_tab_audio_active.png">
        </Item>
        <Item txt="广播" mark="broadcast" :sel="selected">
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png">
            <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png">
        </Item>
        <Item txt="小组" mark="group" :sel="selected">
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png">
            <img slot="activeImg" src="../../assets/ic_tab_group_active.png">
        </Item>
        <Item txt="我的" mark="mine" :sel="selected">
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png">
            <img slot="activeImg" src="../../assets/ic_tab_mine_active.png">
        </Item>
    </div>
</template>

<script>
    import Item from './item'
    export default {
        data() {
            return {
                selected:this.$route.name
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
    }
</style>