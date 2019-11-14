<template>
    <transition 
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutUp"
    >
        <div class="backTop-box" v-if="isShow" @click="backTop">
            <div  class="backTop">
                <img src="//gw.alicdn.com/tfs/TB1GEyAqDtYBeNjy1XdXXXXyVXa-88-88.png_110x10000.jpg_.webp" alt="">
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data(){
        return {
            isShow: false
        }
    },
    created(){
        window.addEventListener("scroll",this.listenHandler)
    },
    beforeDestroy(){
        window.removeEventListener("scroll",this.listenHandler)
    },
    methods:{
        listenHandler(e){
            let sTop = document.documentElement.scrollTop || document.documentElement.scrollTop;
            if(sTop >= 600 && !this.isShow){
                    this.isShow = true;
            }else if(sTop < 160 && this.isShow){
                this.isShow = false;
            }
        },
        backTop(){
            window.scrollTo(0,0)
        }
    }
}
</script>

<style lang="scss">
    .backTop-box{
        width:0.44rem;
        height:0.44rem;
        position: fixed;
        // top: 536px;
        right: 19px;
        bottom: 150px;
        img{
            width:100%;
            height:100%;
        }
    }
</style>
