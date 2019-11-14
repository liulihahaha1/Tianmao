<template>
    <div class="home">
        <!--头部-->
        <div class="header">
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
        </div>
        
        <!--小圆图-->
        <div class="little-img">
            <div class="little-img1">
                <img src="//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" alt="">
                <span>苏宁易购</span>
            </div>
            <div class="little-img2">
                <router-link to="/market" tag="div"><img src="//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp" alt="">
                <span>天猫超市</span></router-link>
                
            </div>
            <div class="little-img3">
                <img src="//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" alt="">
                <span>天猫国际</span>
            </div>
            <div class="little-img4">
                <img src="//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp" alt="">
                <span>聚划算</span>
            </div>
            <div class="little-img5">
                <img src="//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" alt="">
                <span>分类</span>
            </div>
        </div>
        <!--轮播图-->
        <div class="banner-box swiper-container" id="swiper_container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img width="100%" height="100%" src="//gw.alicdn.com/imgextra/i1/91073/O1CN01W3H3QZ1JnTY68iJR8_!!91073-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt="">
                </div>
                <div class="swiper-slide">
                    <img width="100%" height="100%" src="//gw.alicdn.com/imgextra/i4/1170274/O1CN01FUrLvE1DtX5rSmjdY_!!1170274-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt="">
                </div>
                <div class="swiper-slide">
                    <img width="100%" height="100%" src="//gw.alicdn.com/imgextra/i2/918137/O1CN01beMRQu29ynMFh6W3V_!!918137-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt="">
                </div>
                <div class="swiper-slide">
                    <img width="100%" height="100%" src="//gw.alicdn.com/tfs/TB1HHWbNrPpK1RjSZFFXXa5PpXa-1035-390.png_790x10000.jpg_.webp" alt="">
                </div>
                <div class="swiper-slide">
                    <img width="100%" height="100%" src="//gw.alicdn.com/imgextra/i1/1453939/O1CN011affvO1ey6fnSvDCf_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt="">
                </div>

            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="fuli">
            <img src="//gw.alicdn.com/tfs/TB1jG0De1bviK0jSZFNXXaApXXa-750-386.png_790x10000.jpg_.webp" alt="">
        </div>
        <!--内容-->
        <div class="content-box">
            <div class="box1">
                <div class="box1-top">
                    <div class="title">
                        <span>限时抢购</span>
                    </div>
                    <div class="timer">
                        <div class="hours">
                            <span>{{s}}</span>
                            <span class="dd1">:</span>
                        </div>
                        <div class="min">
                            <span>{{m}}</span>
                            <span class="dd2">:</span>
                        </div>
                        <div class="sec">
                            <span>{{h}}</span>
                        </div>
                    </div>
                </div>
                <div class="box1-bottom">
                    <div class="bottom-img1">
                        <img src="//gw.alicdn.com/bao/upload/TB1WOvCfSf2gK0jSZFPXXXsopXa.png_170x10000.jpg_.webp" alt="">
                        <span>为你精选</span>
                    </div>
                    <div class="bottom-img2">
                        <img src="//gw.alicdn.com/i1/1983771543/TB2UD8xkuGSBuNjSspbXXciipXa_!!1983771543.png_170x10000.jpg_.webp" alt="">
                        <span>实惠好货</span>
                    </div>
                </div>
            </div>
            <div class="box2">
                  <div class="box1-top">
                    <div class="title">
                        <span>天猫好物</span>
                    </div>
                    
                </div>
                <div class="box1-bottom">
                    <div class="bottom-img1">
                        <img src="//gw.alicdn.com/tps/bao/upload/TB1Z5Dxdlv0gK0jSZKbXXbK2FXa.png_170x10000.jpg_.webp" alt="">
                        <span>好货必买</span>
                    </div>
                    <div class="bottom-img2">
                        <img src="//gw.alicdn.com/tps/i4/2861537645/O1CN01yP3NY926LSTsnZszi_!!2-item_pic.png_170x10000.jpg_.webp" alt="">
                        <span>时髦设计</span>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="box1-top">
                    <div class="title">
                        <span>聚划算</span>
                    </div>
                    
                </div>
                <div class="box1-bottom">
                    <div class="bottom-img1">
                        <img src="//gw.alicdn.com/tps/O1CN01UOHYQw1CgsXCsvs0r_!!111-2-lubanu.png_170x10000.jpg_.webp" alt="">
                        <span>抢100元劵</span>
                    </div>
                    <div class="bottom-img2">
                        <img src="//gw.alicdn.com/tps/O1CN01OPBuW71DLBNnE5bBn_!!199-2-lubanu.png_170x10000.jpg_.webp" alt="">
                        <span>满499减...</span>
                    </div>
                </div>
            </div>
            <div class="box4">
                <div class="box1-top">
                    <div class="title">
                        <span>天猫闪降</span>
                    </div>
                    
                </div>
                <div class="box1-bottom">
                    <div class="bottom-img1">
                        <img src="//gw.alicdn.com/tps/i1/2201416924483/O1CN01EIsHe21izG6a1d5mm_!!2-item_pic.png_170x10000.jpg_.webp" alt="">
                        <span>降价好货</span>
                    </div>
                    <div class="bottom-img2">
                        <img src="//gw.alicdn.com/tps/i1/2201930864709/O1CN017k9jIb1kelc4VZWzR_!!2-item_pic.png_170x10000.jpg_.webp" alt="">
                        <span>人气爆款</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="love">
            <span>猜你喜欢</span>
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


        <!-- <div class="good-list">
            <div class="list-left">
                <div class="img-box">
                    <div class="left-img">
                    <img src="//gw.alicdn.com/bao/uploaded/i4/3927576815/O1CN01AiYVBy20DJi2scfwN_!!0-item_pic.jpg_290x10000Q75.jpg_.webp" alt="">
                </div>
                </div>
                <div class="left-title">
                    <span>万能四季罩巾简约现代型全盖沙发垫</span>
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
            <div class="list-right">
                <div class="img-box">
                    <div class="left-img">
                    <img src="//gw.alicdn.com/bao/uploaded/i4/3927576815/O1CN01AiYVBy20DJi2scfwN_!!0-item_pic.jpg_290x10000Q75.jpg_.webp" alt="">
                </div>
                </div>
                <div class="left-title">
                    <span>万能四季罩巾简约现代型全盖沙发垫</span>
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
        <div class="good-list">
            <div class="list-left">
                <div class="img-box">
                    <div class="left-img">
                    <img src="//gw.alicdn.com/bao/uploaded/i4/3927576815/O1CN01AiYVBy20DJi2scfwN_!!0-item_pic.jpg_290x10000Q75.jpg_.webp" alt="">
                </div>
                </div>
                <div class="left-title">
                    <span>万能四季罩巾简约现代型全盖沙发垫</span>
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
            <div class="list-right">
                <div class="img-box">
                    <div class="left-img">
                    <img src="//gw.alicdn.com/bao/uploaded/i4/3927576815/O1CN01AiYVBy20DJi2scfwN_!!0-item_pic.jpg_290x10000Q75.jpg_.webp" alt="">
                </div>
                </div>
                <div class="left-title">
                    <span>万能四季罩巾简约现代型全盖沙发垫</span>
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
        </div> -->
        <yBackTop></yBackTop>
         <!--遮层-->
        <div class="mark-box" v-if="isShow">
            <div class="mark-img">
                <img src="https://gw.alicdn.com/tfs/TB1BKOXgbH1gK0jSZFwXXc7aXXa-618-890.png" alt="">
            </div>
            <div class="mark-close" @click="closeMark" >
                <i class="fa fa-close"></i>
            </div>
        </div>
    </div>
   
</template>

<script>
// import animate from "animate"
import Swiper from "swiper"
import yBackTop from "./yBackTop"
import { fail } from 'assert';
export default {
    components:{
        yBackTop
    },
    data(){
        return {
            s:0,
            m:0,
            h:0,
            i:1800,
            isShow:true,
            listdata : [],
        }
    },
    mounted () {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            autoplay: {
                delay:2000
            },
             pagination: {
                el: '.swiper-pagination',
                autoplayDisableOnInteraction : false
            }
            
        });

    },
    created(){
        setInterval( () => {
           let i =  this.i;
            this.h = this.doubleNum(i % 60);
            this.m = this.doubleNum((parseInt(i / 60) % 60));
            this.s = this.doubleNum((parseInt(i / 3600)));
            this.i = i-1;
        }, 1000);
        this.$http.get("/api/list/all").then(res => {
             this.listdata = res.data.data.object_list;   
            //  console.log(res);
        })
    },
    methods:{
         doubleNum(n){
            if(n < 10){
                return "0" + n;
            }else{
                return n;
            }
        },
        closeMark(){
            this.isShow=false;
        }
    }
}
</script>

<style lang="scss">
    .home{
        .mark-box{
            width:100%;
            height:100%;
            background: rgba(0, 0, 0,0.6);
            position: fixed;
            top: 0;
            // left: 64px;
            z-index: 10000;
            .mark-img{
                width:2.4rem;
                height:3.8rem;
                margin:  auto;
                position: absolute;
                left: 0;
                top:0;
                bottom: 0;
                right:0;
                    img{
                        width:100%;
                        height:100%;
                    }
            }   
            .mark-close{
                    width:40px;
                    height:40px;
                    border-radius: 50%;
                   border: 2px solid #eadcdc;
                    color:#ccc;
                    font-size: 37px;
                    text-align: center;
                    line-height: 40px;
                    background: rgba(255,255,255,0.2);
                   position: fixed;
                    top: 553px;
                    left: 165px;
               
            }
        
        }
        .header{
            width: 3.75rem;
            height: 0.9rem;
            background: rgb(255, 0, 54);
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
                    top:0.01rem;
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
        .little-img{
            width:3.75rem;
            height:0.77rem;
            background: rgb(255, 255, 255);
            display: flex;
           justify-content: space-between;
           img{
               width:0.48rem;
               height:0.48rem;
               position: relative;
                top: -0.53rem;
                left: 0.1rem;
           }
           span{
               display:block;
               width:0.7rem;
               height:0.15rem;
               font-size:0.13rem;
               text-align: center;
               margin-top: -0.74rem;;
           }
            .little-img1{
                width:0.7rem;
                height:0.77rem;
                
            }
            .little-img2{
                width:0.7rem;
                height:0.77rem;
                
            }
             .little-img3{
                width:0.7rem;
                height:0.77rem;
               
            }
             .little-img4{
                width:0.7rem;
                height:0.77rem;
                
            }
             .little-img5{
                width:0.7rem;
                height:0.77rem;
                
            }
        }
        .banner-box{
            width:3.75rem;
            height:1.32rem;
            background:rgb(255, 255, 255);
            margin-top:6px;
            img{
                width:3.51rem;
                margin-left:0.12rem;
            }
            .swiper-pagination{
                bottom:-16px;
            }
        }
        .fuli{
            width:3.75rem;
            height:1.8rem;
            background:rgb(255, 255, 255);
            margin-top:10px;
            img{
                width:100%;
                height:100%;
            }
        }
        .content-box{
            width:3.75rem;
            height:2.73rem;
            background:rgb(255, 255, 255);
            margin-top:10px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            
            .box1{
                background:url(//gw.alicdn.com/tfs/TB1pg6qwx9YBuNjy0FfXXXIsVXa-518-512.png?avatar=1_360x10000.jpg_.webp);
                width:1.725rem;
                height:1.285rem;
                
                .box1-top{
                    width:1.57rem;
                    height:0.16rem;
                    margin:10px auto;
                    .title{
                        font-size: 18px;
                        color: #202020;
                        font-weight: 1000;
                        font-family: serif;
                        float: left;
                    }
                    .timer{
                        width:0.6772rem;
                        height:0.21rem;
                       
                        float: right;
                        display: flex;
                        justify-content: space-between;
                        span{
                            font-size:14px;
                            color: #fff;
                            display: block;
                            text-align: center;
                        }
                        .hours{
                            width:0.2rem;
                            height:0.2rem;
                            background-color: rgb(0, 0, 0);
                            border-radius: 3px;
                            .dd1{
                               display: block;
                                color: #000;
                                font-size: 19px;
                                font-weight: 500;
                                position: relative;
                                top: -22px;
                                left: 13px;
                            }
                            
                        }
                    
                        .min{
                            width:0.2rem;
                            height:0.2rem;
                            background-color: rgb(0, 0, 0);
                            border-radius: 3px;
                            .dd2{
                               display: block;
                                color: #000;
                                font-size: 19px;
                                font-weight: 500;
                                position: relative;
                                top: -22px;
                                left: 13px;
                            }
                            
                        }
                        .sec{
                            width:0.2rem;
                            height:0.2rem;
                            background-color: rgb(0, 0, 0);
                            border-radius: 3px;
                        }
                    }
                }
                .box1-bottom{
                    width:1.72rem;
                    height:0.775rem;
                    display: flex;
                    justify-content: space-around;
                    span{
                            
                            height:0.12px;
                            color: rgb(255, 0, 54);
                            font-size:10px;
                            position: relative;
                            top: -1.61rem;
                            left: 0.16rem;
                            line-height:0.12rem;
                            border: 0.5px solid rgb(255, 0, 54);
                            box-sizing: border-box;
                            background-color: rgb(255, 237, 241);

                        }
                    img{
                        width:100%;
                        height:100%;
                        position: relative;
                        top:-0.28rem;
                        left:0.02rem;    
                    }
                    .bottom-img1{
                        width:0.775rem;
                        height:0.775rem;

                        
                    }
                    .bottom-img2{
                        width:0.775rem;
                        height:0.775rem;
                    }
                }
            }
            .box2{
                width:1.725rem;
                height:1.285rem;
                background:url(//gw.alicdn.com/tfs/TB1pg6qwx9YBuNjy0FfXXXIsVXa-518-512.png?avatar=1_360x10000.jpg_.webp);
                .box1-top{
                    width:1.57rem;
                    height:0.16rem;
                    margin:10px auto;
                    .title{
                        font-size: 18px;
                        color: #202020;
                        font-weight: 1000;
                        font-family: serif;
                        float: left;
                    }
                    
                }
                .box1-bottom{
                    width:1.72rem;
                    height:0.775rem;
                    display: flex;
                    justify-content: space-around;
                    span{
                            
                            height:0.12px;
                            color: rgb(255, 0, 54);
                            font-size:10px;
                            position: relative;
                            top: -1.61rem;
                            left: 0.16rem;
                            line-height:0.12rem;
                            border: 0.5px solid rgb(255, 0, 54);
                            box-sizing: border-box;
                            background-color: rgb(255, 237, 241);

                        }
                    img{
                        width:100%;
                        height:100%;
                        position: relative;
                        top:-0.28rem;
                        left:0.02rem;    
                    }
                    .bottom-img1{
                        width:0.775rem;
                        height:0.775rem;

                        
                    }
                    .bottom-img2{
                        width:0.775rem;
                        height:0.775rem;
                    }
                }
            }
            .box3{
                width:1.725rem;
                height:1.285rem;
                background:url(//gw.alicdn.com/tfs/TB1pg6qwx9YBuNjy0FfXXXIsVXa-518-512.png?avatar=1_360x10000.jpg_.webp);
                .box1-top{
                    width:1.57rem;
                    height:0.16rem;
                    margin:10px auto;
                    .title{
                        font-size: 18px;
                        color: #202020;
                        font-weight: 1000;
                        font-family: serif;
                        float: left;
                    }
                    
                }
                .box1-bottom{
                    width:1.72rem;
                    height:0.775rem;
                    display: flex;
                    justify-content: space-around;
                    span{
                            
                            height:0.12px;
                            color: rgb(255, 0, 54);
                            font-size:10px;
                            position: relative;
                            top: -1.61rem;
                            left: 0.16rem;
                            line-height:0.12rem;
                            border: 0.5px solid rgb(255, 0, 54);
                            box-sizing: border-box;
                            background-color: rgb(255, 237, 241);

                        }
                    img{
                        width:100%;
                        height:100%;
                        position: relative;
                        top:-0.28rem;
                        left:0.02rem;    
                    }
                    .bottom-img1{
                        width:0.775rem;
                        height:0.775rem;

                        
                    }
                    .bottom-img2{
                        width:0.775rem;
                        height:0.775rem;
                    }
                }
            }
            .box4{
                width:1.725rem;
                height:1.285rem;
                background:url(//gw.alicdn.com/tfs/TB1pg6qwx9YBuNjy0FfXXXIsVXa-518-512.png?avatar=1_360x10000.jpg_.webp);
                .box1-top{
                    width:1.57rem;
                    height:0.16rem;
                    margin:10px auto;
                    .title{
                        font-size: 18px;
                        color: #202020;
                        font-weight: 1000;
                        font-family: serif;
                        float: left;
                    }
                    
                }
                .box1-bottom{
                    width:1.72rem;
                    height:0.775rem;
                    display: flex;
                    justify-content: space-around;
                    span{
                            
                            height:0.12px;
                            color: rgb(255, 0, 54);
                            font-size:10px;
                            position: relative;
                            top: -1.61rem;
                            left: 0.16rem;
                            line-height:0.12rem;
                            border: 0.5px solid rgb(255, 0, 54);
                            box-sizing: border-box;
                            background-color: rgb(255, 237, 241);

                        }
                    img{
                        width:100%;
                        height:100%;
                        position: relative;
                        top:-0.28rem;
                        left:0.02rem;    
                    }
                    .bottom-img1{
                        width:0.775rem;
                        height:0.775rem;

                        
                    }
                    .bottom-img2{
                        width:0.775rem;
                        height:0.775rem;
                    }
                }
            }
        }
        .love{
            width:3.75rem;
            height:0.4rem;
            background:rgb(255, 255, 255);
            color: rgb(51, 51, 51);
            font-weight: bold;
            font-size:18px;
            line-height: 0.4rem;
            margin-left:14px;
        }
        .cart-list{
            position: absolute;
            top:8.3rem;
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
    
    }

</style>
