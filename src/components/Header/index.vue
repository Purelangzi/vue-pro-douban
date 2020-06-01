<template>
    <div class="app-header" v-show="isShow">
        <div class="left">
            <i :class="['fa','fa-'+icon]"></i>
            <span>豆瓣{{title}}</span>
        </div>
        <div class="right">
            <span>城市</span>
        </div>
    </div>
</template>

<script>
import router from '@/router'
    export default {
        data() {
            return {
                icon:'home',
                title:'首页',
                isShow:true
            }
        },
        created() {
            // 执行全局前置路由守卫
            router.beforeEach((to,from,next)=>{
                switch (to.name) {
                    case 'home':
                        this.icon = 'home'
                        this.title = '首页'
                        this.isShow = true
                    break;
                    case 'audio':
                        this.icon = 'audio-description'
                        this.title = '书影音'
                        this.isShow = true
                    break;
                    case 'broadcast':
                        this.icon = 'newspaper-o'
                        this.title = '广播'
                        this.isShow = true
                    break;
                    case 'group':
                        this.icon = 'group'
                        this.title = '分组'
                        this.isShow = true
                    break;
                    case 'mine':
                        this.icon = 'user-secret'
                        this.title = '我的'
                        this.isShow = true
                    break;
                    default:
                        this.isShow = false
                    break;
                }
                next()
            })
        }
    }
</script>

<style lang="scss">
    .app-header{
        display: flex;
        justify-content: space-between;
        padding: 0 .2rem;
        width: 3.75rem;
        height: 50px;
        line-height: 50px;
        background:rgba(0, 0, 0, .6);
        color: #fff;
        i{
            padding-right: 6px;
        }
    }
</style>