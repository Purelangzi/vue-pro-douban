<template>
    <div class="back-top-box" v-if="isShow" v-backtop>
        <div class="back-top">
            <i class="fa fa-arrow-up"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow:false
            }
        },
         methods: {
            //  backtop(){
            //      window.scrollTo(0,0)
            //  },
            handelEvent(e){
                let sTop = document.documentElement.scrollTop || document.body.scrollTop
                if (sTop >= 300 && !this.isShow) {
                    this.isShow = true
                }else if(sTop < 300 && this.isShow){
                    this.isShow = false
                }
            }
        },
        activated() { // 组件显示时
            window.addEventListener('scroll',this.handelEvent)
            
        },
        deactivated() { // 组件隐藏时
            window.removeEventListener('scroll',this.handelEvent)
            
        },
    }
</script>

<style lang="scss">
    .back-top-box{
        position: fixed;
        right: 20px;
        bottom: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: .4rem;
        height: .4rem;
        background: rgba(0, 0, 0, .3);
        color: #fff;
        border-radius: 50%;
        i{
            font-size: 1.5em;
        }
    }
</style>