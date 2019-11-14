<template>
    <div class="evaluation">
        <p class="ev1">
            <span>商品评价(183)</span>
            <span>查看全部&nbsp;></span>
        </p>
        <p class="ev2">
            <span>包装很好(16)</span>
            <span>味道好闻(15)</span>
            <span>送了赠品(5)</span>
        </p>
        <p class="ev3">
            <img src="https://wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vFkSPFHuXH*evF8LPmHSXHkWMFPzOHPeO8ZHMCQbvFISXm7evkcSXHZHvGQ0P0gL&width=40&height=40&type=sns" alt="">
            <span>你**妹</span>
        </p>
        <p class="ev4">分手了 不知道她喜不喜欢</p>
        <p class="ev5">2019-11-11 化妆品净含量:200ml</p>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss">
    .evaluation{
        margin-top: .1rem;
        width: 100%;
        height: 2rem;
        // background-color: slateblue;
        .ev1{
            padding-top: .1rem;
            span{
                font-size: .13rem;
                // display: flex;
                color: #666;
                &:first-child{
                    padding: .05rem 0 0 .05rem;
                }
                &:last-child{
                    margin-left: 2.1rem;
                    color: #FF0036;
                }
            }
        }
        .ev2{
            span{
                height: .2rem;
                background-color: rgb(255, 238, 238);
                display: inline-block;
                margin-left: .1rem;
                border-radius: .1rem;
                line-height: .2rem;
                padding: .03rem .06rem;
                margin-top:.12rem;
                font-size: .12rem;
                color: #666;
            }
        }
        .ev3{
            margin-top: .1rem;
            img{
                width: .25rem;
                height: .25rem;
                border-radius: .2rem;
                margin-left: .1rem;
            }
            span{
                display: inline-block;
                margin-left: .1rem;
                position: relative;
                top:-8px;
                color: #666;
            }
        }
        .ev4{
            margin-top: .1rem;
            margin-left: .1rem;
            font-size: .13rem;
        }
        .ev5{
            color: #666;
            margin-top: .2rem;
            margin-left: .1rem;
        }
                box-shadow:1px .1rem 1px 1px rgb(241, 241, 241);

    }
</style>