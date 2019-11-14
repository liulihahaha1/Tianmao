<template>
    <div class="seemore">
        <p class="p1">看了又看</p>
        <aside>
            <span
                v-for="item in 3"
                :key="item++"
            >
                <p><img src="https://img.alicdn.com/bao/uploaded/O1CN01SrOr3C274ngFTys0u_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp" alt=""> </p>
                <p>
                    CHANEL 香奈儿之水 润体乳 香体 清新自然
                </p>
                <p style="text-decoration:line-through; color:rgb(160,160,160)">￥520</p>
                <p>￥520</p>
            </span>
        </aside>
    </div>
</template>

<script>


export default {

}

</script>

<style lang="scss">

    .seemore{
                box-shadow:1px .1rem 1px 1px rgb(241, 241, 241);

        margin-top: .1rem;
        .p1{
            
            height: .2rem;
            // background-color: rgb(160, 160, 160);
            margin-top: .1rem;
            font-size: .13rem;
            padding:.1rem;
        }
        aside{
            span{
                display: inline-block;
                width:33.3333333333%;
                text-align: center; 
                p{
                    img{
                        width: 1rem;
                    }
                }
            }
        }
    }
</style>