<template>
    <router-link
        class="movieitem"
        tag="div"
        :to="{name:'moviedetail',params:{id:movie.id}}"
     >
        <div class="img-box">
            <img width="100%" :src="movie.images.small" :onerror="errorImg">
        </div>
        <div class="info">
            <div class="info-left">
                <span>影名：</span><div class="title">{{movie.title}}</div>
                <span>观看人数：</span><div class="count">{{movie.collect_count}}</div>
            </div>
            <div class="info-rigtht">
                <span>导演：</span><div class="director">{{movie.directors[0].name}}</div>
                <span>评分：</span><div class="rating">{{movie.rating.average}}</div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        data() {
            return {
                // 图片加载失败显示提示图片
                errorImg:'this.src="' + require('../../assets/imgError.png') + '"'
            }
        },
        props:{
            movie:Object
        }
    }
</script>

<style lang="scss">
    .movieitem{
        margin-bottom: 20px;
        box-shadow: 2px 3px 4px #a36b6b;
        border-radius: 10px;
        .img-box{
            height: 2.3rem;
            img{
                height: 2.3rem;
            }
        }
        .info{
            display: flex;
            justify-content: space-between;
            padding: 0 .3rem;
            .title{
                margin-left: 20px;
                font-size: 18px;
                font-weight: bold;
                color: #9d6d6d;
            }
            .count{
                color: red;
            }
            .rating,.director{
                margin-left: 20px;
                padding-top: 4px;
                font-size: 16px;
                font-weight: bold;
                color: orange;
            }
            span{
                display: block;
                padding: 8px 0 5px;
                font-weight: bold;
            }
        }
    }
</style>