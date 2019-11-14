<template>
<div>
    <div class="list">
       <mt-cell title="购物车(4)">
        </mt-cell>  
         
    </div>
    <shopping></shopping>
    <bottom></bottom>



</div>
    
  
</template>

<script>
import shopping from "@/components/shopping"
import bottom from "@/components/bottom2"

export default {
    components:{
        shopping,bottom
    },
    
}
</script>

<style lang="scss">
     body{background: rgb(240, 236, 236)}
    .list{
      text-align: center;
      background: white;
      width:100%;
      height:0.50rem;
      font-size:0.16rem; 
   
}    

</style>