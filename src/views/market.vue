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
                <img 
                v-for="good in topgoods"
                :key="good.id"
                :src="good.img" alt="">
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
            path:"",
            topgoods:[
                {id:0,img:"//img.alicdn.com/tps/i4/TB1n7hDlYj1gK0jSZFuwu3rHpXa.png_300x300Q90s50.jpg_.webp"},
                {id:1,img:"//img.alicdn.com/tps/i4/TB10K5beEGF3KVjSZFvwu2_nXXa.png_300x300Q90s50.jpg_.webp"},
                {id:2,img:"//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_300x300Q90s50.jpg_.webp"},
                {id:3,img:"//img.alicdn.com/tps/i4/TB1dqP2i7L0gK0jSZFAwu3A9pXa.png_300x300Q90s50.jpg_.webp"},
                {id:4,img:"//img.alicdn.com/tps/i4/TB1R4Ycmbj1gK0jSZFOwu37GpXa.png_300x300Q90s50.jpg_.webp"},
                {id:5,img:"//img.alicdn.com/tps/i4/TB1i.oseQ9E3KVjSZFGwu319XXa.png_300x300Q90s50.jpg_.webp"},
                {id:6,img:"//img.alicdn.com/tps/i4/TB1NP.teL1G3KVjSZFkwu1K4XXa.png_300x300Q90s50.jpg_.webp"},
                {id:7,img:"//img.alicdn.com/tps/i4/TB1NP.teL1G3KVjSZFkwu1K4XXa.png_300x300Q90s50.jpg_.webp"},
                {id:8,img:'//img.alicdn.com/tps/i4/TB1VFWFcp67gK0jSZPfwu1hhFXa.png_300x300Q90s50.jpg_.webp'}
            ]
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