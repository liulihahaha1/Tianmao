<template>
    <div class="main">
        <!-- 这是主页！ -->
       <!-- {{goods}} -->
       <transition 
         enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
    >
       <!--滑动显示-->
        <div class="header2" v-if="isFixed">
            <div class="left">
                <i class="fa fa-list"></i>
            </div>
            <div class="center">
                <input type="text" placeholder="          搜索商品、品牌">
                <img src="//gw.alicdn.com/tfs/TB1rIFEqCBYBeNjy0FeXXbnmFXa-60-64.png_110x10000.jpg_.webp" alt="">
            </div>
            <div class="right">
                 <span>登录</span>
            </div>
        </div>
     </transition>
       <yIndex></yIndex>
       <compon/>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import { Toast } from 'mint-ui'; //使用minit-ui
import yIndex from "@/components/yIndex"
import compon from "@/components/components.vue"
export default {
    
    components:{
        yIndex
    },
    data(){
        return{
            isFixed:false
        }
    },
    computed:{
        ...mapState({
            goods:state=>state.myCar.cars
        })
    },
    methods:{
        listenScroll(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=50 && !this.isFixed){
                this.isFixed = true;
                
            }else if(sTop<50 && this.isFixed) {
                this.isFixed = false;
            }
        }
    },
    created () {
        Toast({
            message: '提示',
            position: 'bottom',
            duration: 5000
        }); 
        
    },
    mounted(){
       
    },
    activated(){
        window.addEventListener("scroll",this.listenScroll)
        this.isFixed = false;
    },
    deactivated(){
         window.removeEventListener("scroll",this.listenScroll)
    }
}
</script>

<style lang="scss">
    .header2{
            width:3.75rem;
            height:0.7rem;
            background: rgb(255, 0, 54);
            display: flex;
            z-index: 400;
            position: fixed;
            top:0;  
            justify-content: space-between;
            align-items: center;
            // display: none;
          padding-top:10px;
            .left{
                width:0.3rem;
                height:0.3rem;
                margin-left:10px;
                .fa-list{
                    color:#fff;
                    font-size:0.2rem;
                    position: relative;
                    top:-0.83rem;
                    left:0.04rem;
                }
            }
            .center{
                width:2.84rem;
                height:0.36rem;
                input{
                    width:2.84rem;
                    height:0.36rem;
                     position: relative;
                    top:0.08rem;
                    left:0;
                    display: flex;
                    border: 0px solid black;
                    background-color: rgb(255, 255, 255);
                    border-radius: 0.04rem;
                    box-sizing: border-box; 
                }
              
                img{
                    width:0.15rem;
                    height:0.16rem;
                     position: relative;
                    top: -1.08rem;
                    left: 0.1rem;
                }
            }
            .right{
                width:0.28rem;
                height:0.3rem;
                margin-right:10px;
                 span{
                        color:#fff;
                        font-size:0.14rem;
                         position: relative;
                        top:-0.83rem;
                        left:0;      
                    }
            }

        }
</style>