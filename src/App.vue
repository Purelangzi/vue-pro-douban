<template>
  <div id="app">
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
    <AppHeader></AppHeader>
  </div>
</template>

<style lang="scss">
.swiper-pagination-bullet-active{
        background: #fff;
    }
</style>

<script>
import AppHeader from '@/components/Header'
export default {
  components:{
    AppHeader
  }
}
</script>