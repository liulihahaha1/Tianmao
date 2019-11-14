<template>
    <div class="bottom">
            <div class="btmleft">
                <span>
                    <i><img src="../assets/i1.jpg" alt=""></i>
                    <p>店铺</p>
                </span>
                <span>
                    <i><img src="../assets/i2.jpg" alt=""></i>
                    <p>客服</p>
                </span>
                <span>
                    <i><img src="../assets/i3.jpg" alt=""></i>
                    <p>收藏</p>
                </span>
            </div>
            <div class="btmright">
              <span>加入购物车</span> 
                 <router-link to="/goodlist"><span @click="addGoodInCar(good)">立即购买</span></router-link>
            </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    props: ["good"],
    methods: {
    ...mapActions(["addGoodInCar"])
    },
    created() {
        console.log(this.good);
    },

}

</script>

<style lang="scss">
body{
    height: 10rem;
}
.bottom{
    width: 100%;
    height: .5rem;
    margin-top: .5rem;
    position: fixed;
    bottom: 0;
    background-color: salmon;
    display: flex;
    .btmleft{
        width: 40%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        display:flex;
        color: rgb(153, 153, 153);
        span{
            width: 33.33333%;
            height: 100%;
            display: block;
            padding: .1rem;
            i{
                
                img{
                    width: .22rem;
                }
            }
            &:last-child{
                padding: .075rem
            }
        }
    }
    .btmright{
        flex: 1;
        background-color: greenyellow;
        span{
            color: white;
            font-size: .15rem;
            text-align: center;
            line-height: .5rem;
            &:first-child{
                display: inline-block;
                width: 50%;
                height: 100%;
                background-color: rgb(255, 149, 0)
            }
            &:last-child{
                background-color: rgb(255, 0, 54);
                display: inline-block;
                width: 50%;
                height: 100%;
            }
        }
    }
}
</style>