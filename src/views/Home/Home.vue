<template>
    <div class="home">
        <div style="padding-top:60px">
            <Banner></Banner>
        </div>
        <div class="navbar" :class="{fixedTop:isFixed}">
            <span
                v-for="nav in navs"
                :key="nav.id"
                :class="{active:type==nav.type}"
                @click="type=nav.type"
            >{{nav.title}}</span>
        </div>
        <div :class="{fixbox:isFixed}">
            <MovieBox :type="type"></MovieBox>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
    import Tabbar from '@/components/Tabbar'
    import Banner from '@/components/Banner'
    import MovieBox from './MovieBox'
    export default {
        name:'home',
        data() {
            return {
                type:'in_theaters',
                navs:[
                    {id:1,title:'正在热映',type:'in_theaters'},
                    {id:2,title:'即将上映',type:'coming_soon'},
                ],
                isFixed:false
            }
        },
        components:{
            Tabbar,
            Banner,
            MovieBox
        },
        methods: {
            handelEvent(e){
                let sTop = document.documentElement.scrollTop || document.body.scrollTop
                if (sTop >= 290 && !this.isFixed) {
                    this.isFixed = true
                }else if(sTop < 290 && this.isFixed){
                    this.isFixed = false
                }
            }
        },
        activated() {
            window.addEventListener('scroll',this.handelEvent)
        },
        deactivated() {
            window.removeEventListener('scroll',this.handelEvent)
            this.isFixed = false // 关闭固定定位样式
        }
    }
</script>
<style lang="scss">
    .home{
        padding-bottom: 60px;
        .fixbox{
            margin-top: 74px;
        }
        .navbar{
            position: relative;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 10px;
            width: 100%;
            height: 50px;
            background: #fff;
            &.fixedTop{
                position: fixed;
                top: 0;
                left: 0;
                z-index: 11;
                margin-top: 0;
                width: 100%;
            }
            span{
                position: relative;
                transition: all 1.5s;
                &::after{
                    content: "";
                    position: absolute;
                    left: 50%;
                    bottom: -10px;
                    margin-left: -20px;
                    width: 40px;
                    height: 3px;
                    background: transparent;
                    transition: all 1.5s;
                }
            }
            .active{
                color:orange;
                &::after{
                    background: orange;
                }
            }
        }
    }
</style>