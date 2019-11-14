<template>
    <div class="market-main">
        <div class="header-top">
            <div class="top1">
                <i class="fa fa-list"></i>
            </div>
            <div class="top2">
                <img width="100%" height="20px" src="http://gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp" alt="">
            </div>
            <div class="top3">
                <span>登录</span>
            </div> 
        </div>
        <div class="header-bottom">
            <input type="text" placeholder="          搜索商品、品牌">
            <img src="//gw.alicdn.com/tfs/TB1rIFEqCBYBeNjy0FeXXbnmFXa-60-64.png_110x10000.jpg_.webp" alt="">
        </div> 
        <!-- swiper轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                v-for="banner in banners"
                >
                <img :src="banner.img" 
                :key="banner.id"
                alt=""></div>
            </div>
             <div class="swiper-pagination"></div> 
        </div>
        <!--    小商品栏 -->
       
        <div style="background: #7C50EF" class="goods-banner"> 
                <div class="cart-box">
                    <div class="goods-box">
                        <div class="img-box"
                        v-for="good in smallgoods"
                        :key="good.id"
                        >
                            <img :src="good.img" alt=""><br/>
                            <span>网红平价</span>
                        </div>
                    </div>
                </div>
        </div>
        <!--img  -->
        <div class="big-img-box">
            <img src="//img.alicdn.com/tfs/TB1nvOfmFT7gK0jSZFpXXaTkpXa-1053-300.gif?getAvatar=1" alt="">
        </div>
        <!-- small siper -->
         <div class="swiper-container swiper2">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="//img.alicdn.com/imgextra/i4/6000000001941/TB2poCOBMKTBuNkSne1XXaJoXXa_!!6000000001941-0-at.jpg_450x10000Q50s50.jpg_.webp" alt=""></div>
                <div class="swiper-slide"><img src="//img.alicdn.com/imgextra/i2/6000000003809/O1CN01EHyYHI1e0Z6baEJr8_!!6000000003809-0-at.jpg_450x10000Q50s50.jpg_.webp" alt=""></div>
                <div class="swiper-slide"><img src="//img.alicdn.com/imgextra/i4/6000000002739/TB2E3GGoRnTBKNjSZPfXXbf1XXa_!!6000000002739-0-at.jpg_450x10000Q50s50.jpg_.webp" alt=""></div>
               
            </div>
             <!-- <div class="swiper-pagination"></div>  -->
        </div>
        <div class="center">
            
        </div>
        <div class="cart-list">
            <div class="good-list">
            <div class="list-left" 
            v-for="good in listdata"
            >
                <div class="img-box">
                    <div class="left-img">
                    <img :src="good.second[0].third[0].image" alt="">
                </div>
                </div>
                <div class="left-title">
                    <span>{{good.second[0].classifyName}}</span>
                </div>
                <div class="left-yhj">
                    <div class="yhj-img">
                        <img src="//gw.alicdn.com/tfs/TB1a4C4cq1s3KVjSZFAXXX_ZXXa-230-44.png_150x10000.jpg_.webp" alt="">
                    </div>
                    <span>5元劵</span>
                </div>
                <div class="left-bottom">
                    <span class="price">￥23</span>
                    <span class="look">看相似</span>
                </div>
            </div>
            
        </div>
        </div>
    </div>

</template>

<script>
import Swiper from "swiper"
// import route from "router   "
export default {
    data(){
        return {
            isFixed : false,
            path:"",
            listdata : [],
            banners:[
                {id:0,img:"//img.alicdn.com/tfs/TB1E.yZmRv0gK0jSZKbXXbK2FXa-1125-867.jpg_970x970Q90s50.jpg_.webp"},
                {id:1,img:"//img.alicdn.com/tfs/TB1poE.ieH2gK0jSZJnXXaT1FXa-1125-867.jpg_970x970Q90s50.jpg_.webp"},
                {id:2,img:"//img.alicdn.com/tfs/TB1qgqJmKL2gK0jSZPhXXahvXXa-1125-867.jpg_970x970Q90s50.jpg_.webp"},
                {id:3,img:"//img.alicdn.com/tfs/TB1KpdqVhTpK1RjSZFKXXa2wXXa-1125-867.jpg_970x970Q90s50.jpg_.webp"}
            ],
            smallgoods:[
                {id:0,img:"//img.alicdn.com/tps/i4/TB1n7hDlYj1gK0jSZFuwu3rHpXa.png_300x300Q90s50.jpg_.webp"},
                {id:1,img:"//img.alicdn.com/tps/i4/TB10K5beEGF3KVjSZFvwu2_nXXa.png_300x300Q90s50.jpg_.webp"},
                {id:2,img:"//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_300x300Q90s50.jpg_.webp"},
                {id:3,img:"//img.alicdn.com/tps/i4/TB1dqP2i7L0gK0jSZFAwu3A9pXa.png_300x300Q90s50.jpg_.webp"},
                {id:4,img:"//img.alicdn.com/tps/i4/TB1R4Ycmbj1gK0jSZFOwu37GpXa.png_300x300Q90s50.jpg_.webp"},
                {id:5,img:"//img.alicdn.com/tps/i4/TB1i.oseQ9E3KVjSZFGwu319XXa.png_300x300Q90s50.jpg_.webp"},
                {id:6,img:"//img.alicdn.com/tps/i4/TB1NP.teL1G3KVjSZFkwu1K4XXa.png_300x300Q90s50.jpg_.webp"},
                {id:7,img:"//img.alicdn.com/tps/i4/TB1NP.teL1G3KVjSZFkwu1K4XXa.png_300x300Q90s50.jpg_.webp"},
                {id:8,img:'//img.alicdn.com/tps/i4/TB1VFWFcp67gK0jSZPfwu1hhFXa.png_300x300Q90s50.jpg_.webp'},
                {id:9,img:"//img.alicdn.com/tps/i4/TB1r.4zlQT2gK0jSZFkwu3IQFXa.png_300x300Q90s50.jpg_.webp"},
                {id:10,img:"//img.alicdn.com/tps/i4/TB1Uw6ckfb2gK0jSZK9wu1EgFXa.png_300x300Q90s50.jpg_.webp"},
                {id:11,img:"//img.alicdn.com/tps/i4/TB1gasfhlr0gK0jSZFnwu2RRXXa.png_300x300Q90s50.jpg_.webp"},
                {id:12,img:"//img.alicdn.com/tps/i4/TB1kIuKgeL2gK0jSZFmwu37iXXa.png_300x300Q90s50.jpg_.webp"},
                {id:13,img:"//img.alicdn.com/tps/i4/TB1y5KceBWD3KVjSZKPwu1p7FXa.png_300x300Q90s50.jpg_.webp"},
                {id:14,img:"//img.alicdn.com/tps/i4/TB1KjFNdQxz61VjSZFrwu0eLFXa.png_300x300Q90s50.jpg_.webp"},
                {id:15,img:"//img.alicdn.com/tps/i4/TB1n7hDlYj1gK0jSZFuwu3rHpXa.png_300x300Q90s50.jpg_.webp"},
                {id:16,img:"//img.alicdn.com/tps/i4/TB10K5beEGF3KVjSZFvwu2_nXXa.png_300x300Q90s50.jpg_.webp"},
                {id:17,img:"//img.alicdn.com/tps/i4/TB1I7pZdkxz61VjSZFrwu0eLFXa.png_300x300Q90s50.jpg_.webp"}
            ],
            
        }
    },
    methods: {
        back(){
            this.$router.push(this.path);
        }
    },
    mounted () {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
             autoplay:{
                    delay:2000
                },
             pagination: {
                el: '.swiper-pagination',
            }
        })        
    },
    created() {
         this.$http.get("/api/list/all").then(res => {
             this.listdata = res.data.data.object_list;   
            //  console.log(res);
        })
    },
}
</script>

<style lang="scss">
        *{
            margin: 0;
            padding: 0;
        }
        .market-main{
            width: 3.75rem;
            height: 0.9rem;
            background: rgba(0,0,0,0);
           
            .header-top{
                width:3.75rem;
                height:0.44rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .top1{
                    width:0.3rem;
                    height:0.3rem;
                    
                    margin-left:0.12rem;
                    .fa-list{
                          color:#fff;
                        font-size:0.2rem;
                         position: relative;
                        top:-0.83rem;
                        left:0.04rem;
                }
             }
                .top2{
                    width:1.2rem;
                    height:0.4rem;
                    img{
                        position: relative;
                        top:-0.74rem;
                        left:0;
                    }
                }
                .top3{
                     width:0.3rem;
                    height:0.3rem;
                    margin-right:14px;                  
                    span{
                        color:#fff;
                        font-size:0.14rem;
                         position: relative;
                        top:-0.83rem;
                        left:0;      
                    }
                }
            }
            .header-bottom{
                width:3.75rem;
                height:0.46rem;
               
                input{
                    width:3.55rem;
                    height:0.36rem;
                     position: relative;
                    top:0.05rem;
                    left:0.1rem;
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
                    top:-1.12rem;
                    left:0.22rem;
                }
            }
        }
        .swiper-container {
            overflow: hidden;
           position: absolute;
           top:-0.3rem;
           z-index: -100;
            width: 100%;
            height: 2.89rem;
            .swiper-pagination{
                position: absolute;
                bottom: -0.2rem;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }  
        .goods-banner{
            height: 1.79rem;
            // background: #7C50EF;
            position: absolute;
            top:2.55rem;
            width: 100%;
            .cart-box{ 
                width: 3.59rem;
                height: 98%;
                overflow-x:auto;
                 border-radius: 10px;
                 margin: 0 auto;
                .goods-box{
                    width: 7.1rem;
                    height: 98%;
                    margin: 0 auto;
                    margin-top:6px;
                    background: #fff;
                   border-radius: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    .img-box{
                        margin-top:0.2rem;
                        width: 0.7rem;
                        height: 0.5rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                    img{
                        width: 0.47rem;
                        height: 0.47rem;
                    } 
                    font-size: 0.1rem;
                    }
                    
                } 
            }
                  
        
            
        }
        .big-img-box{
            position: absolute;
            top:4.3rem;
            width: 100%;
            background: #7C50EF;
            img{
                width: 3,59rem;
                height: 1rem;
                margin: 0 auto;

            }
        }
        .swiper2{
            overflow: hidden;
           position: absolute;
           top:4.3rem;
           left: 0.19rem;
           z-index: 10000;
            width: 0.8rem;
            height: 0.8rem;
            img{
                width: 0.9rem;
                height: 0.9rem;
            }
        }
        .center{
            width: 3.75rem;
            height: 1rem;
            background: url("https://img.alicdn.com/tfs/TB1CZhSmrH1gK0jSZFwXXc7aXXa-1125-300.jpg") 100% ;
            position: absolute;
            background-size: 100% auto; 
            background-repeat: no-repeat; 
            top:5.6rem;
        }
        .cart-list{
            position: absolute;
            top:5.6rem;
            width: 3.75rem;
            .good-list{
            width:3.75rem;
            // height:2.77rem;
            background:rgb(255, 255, 255);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            img{
                width:100%;
                height:100%;
            }
            
            .list-left{
                width:1.7rem;
                height:2.67rem;
                background:rgb(255, 255, 255);
                border: 1px solid rgb(237, 237, 237);
                .img-box{
                    width:1.68rem;
                    height:1.68rem;
                    background:rgba(0, 0, 0, 0.03);
                    .left-img{
                        width:1.38rem;
                        height:1.38rem;
                        position: relative;
                        top: 14px;
                        left: 14px;
                    
                    }

                }
                .left-title{
                    width:1.68rem;
                    height:0.67rem;
                    background:rgb(255, 255, 255);
                    span{
                        display: block;
                        height:0.36rem;
                        font-size:14px;
                        color: rgb(62, 62, 62);
                        line-height: 0.2rem;
                        margin-left: 10px;
                    }
                }
                .left-yhj{
                    width:1.48rem;
                    height:0.23rem;
                    position: relative;
                    top: -23px;
                    margin-left: 10px;
                    span{
                            color: rgb(255, 0, 54);
                            font-size:12px;
                            display: block;
                            width:0.4rem;
                            text-align: center;
                            position: relative;
                            top: -17px;
                            left: 86px;
                            border: 1px solid rgb(255, 0, 54);
                            box-sizing: border-box;
                    }
                    .yhj-img{
                        width:0.73rem;
                        height:0.2rem;
                        img{
                            position: relative;
                            top: -85px;
                            left:0;
                        }
                    }
                }
                .left-bottom{
                    width:1.7rem;
                    height:0.18rem;
                    position: relative;
                    top: -19px;
                    left: 0;
                    .price{
                        font-size:16px;
                        font-weight: 900;
                        color: rgb(255, 0, 0);
                        position: relative;
                        top: -91px;
                        left: 10px;
                    }
                    .look{
                        display: block;
                        width:0.54rem;
                        height:0.23rem;
                        background: pink;
                        font-size:12px;
                        color: rgb(255, 0, 54);
                        position: relative;
                        top: -134px;
                        left: 106px;
                        text-align: center;
                        line-height:0.23rem;
                        border-radius: 11.75px;
                    }
                }
                
            }
            }
        }
</style>