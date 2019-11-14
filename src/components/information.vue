<template>
    <div class="information">
        <div class="infor1">
            <p>￥330.00</p>
            <p>CHANEL 香奈儿蔚蓝男士沐浴露 蔚蓝男士香水系列</p>
        </div>

        <div class="infor2">
            <aside>
                <span>选择</span>
                <span>请选择化妆品净含量</span>
                <span>></span>
            </aside>
            <aside>
                <span>参数</span>
                <span>品牌&nbsp;男士护肤单品111</span>
                <span>></span>
            </aside>
        </div>
    </div>
</template>

<script>
export default {

}

</script>

<style lang="scss">
    .infor1{
        width: 100%;
        background-color: white;
        box-shadow:1px 10px 1px 1px rgb(241, 241, 241);
        p{
            margin-top: .05rem;
            &:first-child{
                font-size: .22rem;
                color: red;
                margin-left: .05rem;
            }
            &:last-child{
                font-size: .14rem;
                color: black;
                margin-left: .1rem;
            }
        }
    }
    .infor2{
        margin-top: .1rem;
        width: 100%;
        height: .9rem;
        box-shadow:1px .1rem 1px 1px rgb(241, 241, 241);
        aside{
            height: 50%;
            line-height: .45rem;
            span{
                display: block;
                float: left;
                font-size: .12rem;
                &:first-child{
                    width: .4rem;
                    text-align: center;
                    color: #999;
                    height: 100%;
                    // background-color: dimgrey;
                }
                &:nth-child(2){
                    width: 1.14rem;
                    height: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    // background-color: greenyellow;
                }
                &:nth-child(3){
                    float: right;
                    margin-right: .1rem;
                    font-size: .2rem;
                    color: #999;
                }
            }
        }

    }
</style>