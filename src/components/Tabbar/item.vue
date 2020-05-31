<template>
    <div class="item" @click="change">
        <span v-if="!flag"><slot name="normalImg"></slot></span>
        <span v-else><slot name="activeImg"></slot></span>
        <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>

<script>
    export default {
        props:['txt','mark','sel'],
        computed: {
            flag(){
                if (this.mark == this.sel) {
                    return true
                }
                return false
            }
        },
        methods: {
            change(){ // 希望改变sel的值
                // this.changeSelected(this.mark)
                // this.$emit('changeSelected', this.mark)
                this.$router.push('/'+this.mark)
            }
        }
    }
</script>

<style lang="scss">
    .item{
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 40px;
            height: 40px;
        }
        .active{
            color: #42bd56;
        }
    }

</style>