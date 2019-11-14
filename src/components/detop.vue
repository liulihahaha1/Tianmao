<template>
    <div class="detop">
        <div class="top1" v-if="topX">
            <span class="fa1" @click="clickX">×</span>
            <span class="tmlogo"></span>
            <span class="span3">
                <p>恭喜获0.01元天猫好物</p>
                <p>手机天猫App新人专享</p>
            </span>
            <span class="span4">
                <aside>马上抢</aside>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            topX:true
        }
    },
    methods:{
        clickX(){
            this.topX = false
        }
    },
}
</script>

<style lang="scss">
    .top1{
        width: 100%;
        box-shadow:1px 1px 1px 1px #999;
        height: .4rem;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: row;
        box-shadow:1px .1rem 1px 1px rgb(233, 230, 230);
            .fa1{
                display: block;
                width: .4rem;
                height: .4rem;
                color: #c0c0c0;
                background-color: rgb(255, 255, 255);
                line-height: .4rem;
                font-size: .4rem;
                text-align: center;
                cursor: pointer
            }
            .tmlogo{
                display: block;
                width: .4rem;
                height: .4rem;
                background: url("//gw.alicdn.com/tfs/TB1RVKkdamWBuNjy1XaXXXCbXXa-92-92.png") no-repeat;
                background-size: 85% 85%;
                background-color: #fff;
                background-position: 0 center;
            }
            .span3{
                width: 2rem;
                height: .4rem;
                background-color: rgb(255, 255, 255);
                p{
                    margin-top: .03rem;
                    color: rgb(146, 146, 146);
                    &:first-child{
                        font-size: .14rem;
                        color: #383838
                    }
                }
            }
            .span4{
                width:.95rem;
                height: .4rem;
                line-height:.4rem;
                display: block;
                background-color: rgb(255, 255, 255);
                aside{
                    width:80%;
                    height:.28rem;
                    margin-top: .07rem;
                    border-radius: 30px;
                    background-color: rgb(255, 36, 36);
                    color:white;
                    line-height:.28rem;
                    font-size:.14rem;
                    text-align: center;
                }
            }
    }
    
</style>