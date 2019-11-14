<template>
    <div class="shop">
        <p>
            <span>
                <img src="https://img.alicdn.com/imgextra//i3/4207517744/O1CN017SciTR274nfnE2a9b_!!4207517744.jpg_120x120Q50s50.jpg_.webp" alt="">
            </span>
            <span>
                <p>CHANEL香奈儿官方旗舰店 香水与美容品</p>
                <p><img src="https://img.alicdn.com/tfs/TB1u5sBnlfH8KJjy1XbXXbLdXXa-198-36.png_120x120Q90s50.jpg_.webp?getAvatar=avatar" alt=""></p>
            </span>
        </p>
        <p class="shopp2">
            <span class="shop2into"><span>宝贝描述</span> <span>4.8</span><span>↑</span></span>
            <span class="shop2into"><span>卖家服务</span> <span>4.8</span><span>↑</span></span>
            <span class="shop2into"><span>物流服务</span> <span>4.8</span><span>↑</span></span>
        </p>
        <p class="shopp3">
            <span>全部商品</span>
            <span>进入店铺</span>
        </p>
    </div>
</template>

<script>
export default {

}

</script>

<style lang="scss">
    .shop{
        box-shadow:1px .1rem 1px 1px rgb(241, 241, 241);
        margin-top: .1rem;
        p{
            &:first-child{
                display: flex;
                span{
                    margin-top: .1rem;
                    &:first-child{
                        
                        img{
                            width: .5rem;
                            height: .5rem;
                            border: 1px solid black;
                            margin: 0 0 0 .1rem
                        }
                    }
                    &:last-child{
                        margin-left: .1rem;
                        p{
                            font-size: .16rem;
                            width: 2.8rem;
                            img{
                                width: .8rem;
                            }
                            
                        }
                        
                    }
                }
            }
        }
        .shopp2{
            // background-color: springgreen;
            margin: .2rem;
            .shop2into{
                display: inline-block;
                text-align: center;
                width: 33%;
                span{
                     &:nth-child(1){
                    color: #666;
                } 
                    &:nth-child(2){
                    color: red;
                } 
                &:nth-child(3){
                    background-color: red;
                    display: inline-block;
                    width: .11rem;
                    border-radius: .11rem;
                    color: white;
                    margin-left: .04rem;
                } 
                
                }
                
            }
        }
        .shopp3{
            padding-bottom: .1rem;
            display: flex;
            span{
                display: inline-block;
                width: .9rem;
                height: .21rem;
                border-radius: .1rem;
                border: 1px solid red;
                color: red;
                text-align:center;
                line-height: .21rem;
                &:first-child{
                    margin-left: .9rem;
                }
                &:last-child{
                    margin-left: .1rem;
                }
            }
        }
    }
</style>