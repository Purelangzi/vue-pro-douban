<template>
    <div class="home">
        <div style="padding-top:60px">
            <Banner></Banner>
        </div>
        <div class="navbar">
            <span
                v-for="nav in navs"
                :key="nav.id"
                :class="{active:type==nav.type}"
                @click="type=nav.type"
            >{{nav.title}}</span>
        </div>
        <MovieBox :type="type"></MovieBox>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
    import Tabbar from '@/components/Tabbar'
    import Banner from '@/components/Banner'
    import MovieBox from './MovieBox'
    export default {
        data() {
            return {
                type:'in_theaters',
                navs:[
                    {id:1,title:'正在热映',type:'in_theaters'},
                    {id:2,title:'即将上映',type:'coming_soon'},
                ]
            }
        },
        components:{
            Tabbar,
            Banner,
            MovieBox
        }
    }
</script>
<style lang="scss">
    .home{
        padding-bottom: 60px;
        .navbar{
            position: relative;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 10px;
            width: 100%;
            height: 50px;
            background: #fff;
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