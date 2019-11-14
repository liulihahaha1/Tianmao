<template>
    <div class="bottom">
        <div  class="bottom-all">
            <div class = "bottom-left" style="position:relative">
                <img class="qua" src="../assets/quan.jpg"  v-if="isshow" alt="" @click="isshow = !isshow">
                <img class= "duigou" style="width:.2rem" src="../assets/huang.jpg" v-else alt="" @click="isshow = !isshow">
                <span class="span-left">全选</span>
              </div>
              <div class="bottom-right">
                  <span class="add">合计:</span>
                  <span class="price">￥297.00</span>
                  <span class="jiesuan"> 结算（1）</span>

              </div>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return {
            isshow:false
        }
    }
}
</script>

<style lang="scss">

 .bottom{
        position: fixed;
        bottom:0;
        width:100%;
        height:.45rem;
        background: white;
        .bottom-all{
            width:100%;
            display: flex;
            justify-content: space-between;
            .bottom-left{
                width:.5;
                height:.45rem;
                background:white; 
                // margin-left:-.4rem;
                //  display: flex;
                //  justify-content: space-around;
                    .qua,.duigou{
                            display:inline-block;
                            width:0.20rem ;
                            height:0.20rem;
                            }    
                    .span-left{
                        width:.9rem;
                        height:.9rem;
                        font-size:.16rem;
                        display: inline-block;
                        padding:0 0 0 .05rem;
                    } 
                   
                    }
                     .bottom-right{
                        display: flex;
                        justify-content: space-between;
                        // flex:1;
                        width:1.9rem;
                        height:.45rem;
                        // background: orchid;
                        line-height:.45rem;
                        .add{
                            display: inline-block;
                            width:.57rem;
                            height:.37rem;
                            font-size:.15rem;
                            // background: indianred;
                        }
                        .price{
                            font-size:.11rem;
                            color:rgb(233, 112, 32);
                        }
                        .jiesuan{
                            display: inline-block;
                            width:.7rem;
                            height:.5rem;
                            background: rgb(233, 112, 32);
                            text-align: center;
                            // padding-left:.05rem;
                            color:white;
                        }
                    }
                   
            }
        
       
    }
</style>