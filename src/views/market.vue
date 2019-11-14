<template>
    <div class="market">   
        <div v-if="!path"></div>
        <div v-else>
            <market :path="path"></market>
        </div>
        <market :path="path"></market>
        <!-- small-goods-header -->
        <div class="small-goods-header" v-if="isFixed">
            <div class="goods-header">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
                <img src="//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_170x120Q90s50.jpg_.webp" alt="">
            </div>
        </div>
        <div style="height:2000px"></div>
    </div>
</template>

<script>
import market from "@/components/market.vue"
export default {
    components:{
        market
    },
     data(){
        return {
            isFixed : false,
            path:""
        }
    },
    methods: {
        listenScroll(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=300 && !this.isFixed){
                this.isFixed = true;
                
            }else if(sTop<300 && this.isFixed) {
                this.isFixed = false;
            }
        }
    },
    activated() {
        // alert(1);
       window.addEventListener("scroll",this.listenScroll)
        this.isFixed = false;
    },
    deactivated(){
         window.removeEventListener("scroll",this.listenScroll)
    },
    created() {
        this.$router.beforeEach((to,from,next)=>{
            // console.log(to.name);
            // this.path = to.name;
            next();
        })
    },
    /* beforeRouteEnter(to,from,next){
            console.log("全局前置路由");
            next(); }
    } */
}
</script>

<style lang = "scss">
    .small-goods-header{
            width: 3.75rem;
            height: 0.72rem;
            background: #fff;
            position: fixed;
            top:0;
            z-index: 80000;
            overflow: auto;
            /* display: none; */
            border-radius: 0 0 10px 10px;
            .goods-header{
                width: 7.5rem;
                height: 0.72rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                align-items: center;
                
                img{
                    width: 0.5rem;
                    height: 0.5rem;
                    
                }
            }

        }
</style>