<template>
    <div class="components" >
        <div class="all"
             v-for="good in goods"
            :key="good.spuId"
        >
        <div class = "content" style="display:flex">
          
                <img class="quan" src="../assets/quan.jpg" alt="">
                <img class= "duigou" src="../assets/huang.jpg" alt="">
                <img class ="mao" src="../assets/tianmao.jpg" alt="">
                <span class="dian">小米官方旗舰店  ></span>
                <span class="bianji">编辑</span>
         </div>
          <div class="huodong">
            <img src="../assets/huodong.jpg" alt="" class="Storefront">
            <span class="title">满150元,享包邮</span>
        </div>
        <div class="goods">
            <div class="left">
                <img class="quan" src="../assets/quan.jpg" alt="">
                <img class= "duigou" src="../assets/huang.jpg" alt="" width="100px" height="100px">
                <img class="goods_img" :src="good.images" alt="">
           </div>
            <div class="introduce" >
                <span class="goods_type">小米米家自动泡沫洁面机多芬男士控油保湿清洁洗脸仪</span>
                <img src="../assets/wuyougou.jpg" alt="" class="assure">
                <select class="choice" name="" id="">
                    <option value="">米家自动泡沫机</option>
                    <option value="">sadsa</option>
                </select>
                <div class="limit">限购10件</div>
                <div class="num">
                    <span class="span1">￥99</span>
                    <span class="span2" >
                        <span @click="reduceGoodInCar(good)">-</span>
                        <span>{{good.num}}</span>
                        <span @click="addGoodInCar(good)">+</span>
                    </span>
                </div>
            </div>
            </div>
            </div>
            <!-- <div class="bottom">



            </div> -->
    </div> 
   
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    data(){
       return{
        //    goods:[]
       }
    },
    computed:{
        ...mapState({
            goods:state=>state.myCar.cars
        }),
        // ...mapGetters(["computeTotal"])
         ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"])
    },
    created(){
       console.log(this.goods);
    }


}
</script>

<style lang="scss">
*{
    margin:0;
    padding:0;
}
body{
    font-size: 12px;
}
.content{
        border-bottom:1px solid rgb(247, 247, 250)!important ;
        width:100%;
        height:.48rem !important;
        background:white;
        margin-top:0.05rem;
        .quan{
            display:block;
            width:0.20rem;
            height:0.20rem;
        //    display:flex;
           align-items: center;
           padding-top: .2rem ;    
           padding-left:.1rem;
           
        }
         .duigou{
            width:0.25rem !important;
            height:0.23rem;
            display:block;
            padding-top: .2rem ;    
            // padding-left:.2rem; 
            margin-left:-.2rem; 
            // display:none;

        }
        .mao{
           margin-left:0.05rem;
           width:.2rem;
           height:.2rem;
            padding-top:.2rem;
            padding-left:.05rem;
   

         

        }
         .dian{
             width:3rem;
             height:.26rem ;
             font-size:0.12rem;
             padding-top: .2rem ;
             padding-left:.05rem;
              display:block;
          
         }
  
        .bianji{
           width:0.96rem;
           height:.36rem;
            font-size:0.11rem;
            display:block;
            padding-top:.2rem;
            padding-left:1.5rem;
        }

}
.huodong{
        width:100%;
        height:0.58rem;
        background: white;
        .Storefront{
             width:.5rem;
             height:0.15rem;
             font-size:.1rem;
             padding-left:0.35rem;
             padding-top:.1rem;
             display:inline-block;

        }
        .title{
             padding-left:.1rem; 
              padding-top:.05rem;
             display:inline-block;
             font-size:.12rem;
        }

    
        }
        .goods{
        width:100%;
        height:1.4rem;
        background: white;        
          display:flex;
           justify-content: space-between;
        .left{
 
              .quan{
            display:block;
            width:0.20rem;
            height:0.20rem;
           padding-top: .1rem ;    
           padding-left:.1rem;
           
        }
       .duigou{
            width:0.25rem !important;
            height:0.23rem;
            display:block;

            // padding-top: .2rem ;    
             padding-left:.1rem; 
           margin-top:-.2rem; 
            // display:none;

        }
          .goods_img{
              width:1rem;
              height:1rem;
              margin-top: -.5rem ;    
              margin-left:.4rem;
              display: block;
              float:left;
        } 
        }
         
        .introduce{
        // width:1.9rem;
        // float: right;
        height:1.57rem;
       
        // background: orchid;
         margin-top:-.22rem;
        margin-left:0.15rem;
         
        
 
      
        .goods_type{
            font-size:0.12rem;
            display: block;
          

        }
        .assure{
            width:0.70rem;
            height:0.13rem;
            padding:0.05rem 0 0.05rem 0;
            display: block;
         
        }
        .choice{
        
            width:1.88rem;
            height:0.23rem;
            background:rgb(247, 247, 243);
            border:rgb(247, 247, 243);
            color:rgb(214, 214, 211);
        }
        .limit{
            font-size:0.13rem;
            color:rgb(233, 112, 32);
            padding:.05rem 0 .05rem 0;
       
        }
        .num{
            width:1.9rem;
            height:.45rem;
            // background: dodgerblue;
            line-height: .45rem;
            display: flex;
            justify-content: space-between;
          .span1{
                font-size:.16rem;
                color:rgb(233, 112, 32);
          }
          .span2{
              font-size:.16rem;
              color:rgb(156, 154, 154);
              span{
                 &:nth-child(2){
                  padding:0 .2rem 0 .2rem ;
              } 
              }
              
              
              
          }
        }
    }

    // .bottom{
    //     position: fixed;
    //     bottom:0;
    //     width:100%;
    //     height:.75rem;
    //     background: black;
    // }




        }


</style>