<template>
  <div id="app">
    <router-view></router-view>
    <AppHeader></AppHeader>
  </div>
</template>

<style lang="scss">
</style>

<script>
import AppHeader from '@/components/Header'
export default {
  components:{
    AppHeader
  }
}
</script>