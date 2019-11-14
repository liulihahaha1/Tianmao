<template>
    <div class="detail">
        <detop></detop>
        <banner></banner>
        <information></information>
        <evaluation></evaluation>
        <shop></shop>
        <seemore></seemore>
        <moreimg></moreimg>







        <bottomtop></bottomtop>
        <bottom></bottom>
    </div>
</template>

<script>

import detop from "@/components/detop.vue"
import banner from "@/components/banner.vue"
import information from "@/components/information.vue"
import bottom from "@/components/bottom.vue"
import evaluation from "@/components/evaluation.vue"
import shop from "@/components/shop.vue"
import seemore from "@/components/seemore.vue"
import moreimg from "@/components/moreimg.vue"
import bottomtop from "@/components/bottomtop.vue"


export default {
    components:{
        detop,banner,information,bottom,evaluation,shop,seemore,moreimg,bottomtop
    }
}

</script>

<style lang="scss">

    // body{
    //     height: 30rem;
    // }
    *{
        margin: 0;
        padding: 0;
    }
</style>