<template>
    <div class="home-banner swiper-container">
        <div class="swiper-wrapper">
            <router-link class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"
                tag="div"
                :to="{name:'moviedetail',params:{id:banner.id}}"
            >
                <img :src="banner.images.small">
            </router-link>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        data() {
            return {
                banners:[]
            }
        },
        created() {
            this.$axios.get('/api/db/in_theaters',{
                params:{
                    limit:5
                }
            }).then(res => {
                this.banners = res.data.object_list
                // 数据后续更改 虚拟dom进行对比 diff算法 重新进行真实dom的渲染
                // 必须要等到因数据改变引发真实dom渲染完成后，再去进行实例化的操作即可
                // this.$nextTick(()=>{})
                this.$nextTick(()=>{
                    new Swiper('.home-banner',{
                        loop:true,
                        autoplay:{
                            delay:3000,
                            disableOnInteraction:false
                        },
                        pagination:{
                            el:'.swiper-pagination'
                        }
                    })
                })
                
            })
        },
    }
</script>

<style lang="scss">
    .home-banner{
        height: 2.2rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mint-header{
        background-color: #7a94a7;
    }
</style>