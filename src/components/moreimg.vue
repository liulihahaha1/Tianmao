<template>
    <div class="moreimg">
        <p class="moreimgp">—————— &nbsp;&nbsp;&nbsp;详情&nbsp;&nbsp;&nbsp;——————</p>
        <img :src="item.images" alt="" v-for="item in img" :key="item.id">
    </div>
   
</template>

<script>


export default {
    data(){
        return {
            img:[
                {id:"1" , images:require("@/assets/1.jpg")},
                {id:"2" , images:require("@/assets/2.jpg")},
                {id:"3" , images:require("@/assets/3.jpg")},
                {id:"4" , images:require("@/assets/4.jpg")}



            ]
        }
    }
}

</script>

<style lang="scss">
    .moreimgp{
        
        height: .35rem;
        background-color: rgb(241, 241, 241);
        text-align: center;
        line-height: .35rem;
        color: rgb(156, 156, 156);
        
    }
        .moreimg{
            
                img{
                                width: 100%;
                                height: 3rem;
                            }
            }
            
</style>