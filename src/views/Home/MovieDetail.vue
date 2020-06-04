<template>
    <div class="movie-detail">
        <div class="loading" v-if="!movie"></div>
        <div v-else>
            <mt-header fixed :title="movie.title">
                <router-link to="/" slot="left">
                    <mt-button icon="back">back</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div style="padding-top:50px">
                <div class="img-box">
                    <img width="100%" :src="movie.images.small" :onerror="errorImg">
                </div>
            </div>
            <p>电影名：</p>
            <div>{{movie.title}}</div>
            <p>内容简介：</p>
            <div>{{movie.summary}}</div>
            <p>演员表：</p>
            <div
                v-for="cast in movie.casts"
                :key="cast.id"
            >
            <img width="85" height="85" :src="cast.avatars.small">
            <p>{{cast.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movie:null,
                // 图片加载失败显示提示图片
                errorImg:'this.src="' + require('../../assets/imgError.png') + '"'
            }
        },
        created() {
            this.$axios.get('/api/db/movie_detail/'+this.$route.params.id).then(res => {
                this.movie = res.data
            })
        },
    }
</script>

<style lang="scss">
    .img-box{
        height: 2.5rem;
        img{
            height: 100%;
        }
    }
</style>