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
        <bottom :good="good"></bottom>
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
    name:"detail",
    components:{
        detop,banner,information,bottom,evaluation,shop,seemore,moreimg,bottomtop
    },
    data(){
        return {
             good:{}
        }
       
    },
   created () {
         this.$http.get("/api/homebanner/banner/?id="+ this.$route.params.id).then(res => {
            // console.log(res);
            var arr = res.data.data.object_list[6].skuInfo;
            // console.log(arr);
              for(var j = 0; j < arr.length; j++){
                // console.log(arr[j].skuId)
                if(arr[j].spuId == this.$route.params.id){
                  this.img = arr[j].images;
                  this.good = arr[j];
                  
                }
              }
            
        })
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