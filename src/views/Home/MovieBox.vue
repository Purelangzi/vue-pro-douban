<template>
    <div class="moviebox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <MovieItem
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        ></MovieItem>
    </div>
</template>

<script>
import MovieItem from './MovieItem'
import {Toast} from 'mint-ui'
    export default {
        props:['type'],
        data() {
            return {
                movies:[],
                loading:false, // 默认开启无限滚动
                limit:5,
                page:1,
                hasMore:true // 代表有更多数据
            }
        },
        watch: {
            type(){
                this.movies = [] // 清空之前的数据
                this.page = 1 // 请求第一页数据
                this.hasMore = true // 有更多数据
                this.getMovie() // 请求数据
                
            }
        },
        methods: {
            loadMore(){
                if(!this.hasMore){ // 没有更多数据
                    this.loading = true // 关闭无限滚动
                    Toast({
                        message:'我是有底线的...',
                        position:'bottom'
                    },1500)
                    return false // 阻止后续的请求
                }
                this.getMovie()
            },
            getMovie(){
                let {limit,page} = this;
                this.loading = true // 关闭无限滚动
                let instance = Toast({
                    message:'正在加载中...',
                    iconClass:'fa fa-cog fa-spin'
                },-1)
                this.$axios.get('/api/db/'+this.type,{
                    params:{
                        limit, // 每页显示的条数
                        page // 页码
                    }
                }).then(res => {
                    instance.close() // 数据请求成功，关闭弹出框
                    this.loading = false // 请求完成后开启无限滚动
                    this.movies = this.movies.concat(res.data.object_list)
                    if(this.limit * this.page >= res.data.total){
                        this.hasMore = false // 没有更多数据了
                        return false
                    }
                    this.page++
                })
            }
        },
        created() {
            
        },
        components:{
            MovieItem
        }
    }
</script>

<style lang="scss">
    .moviebox{
        margin: .14rem;
    }
</style>