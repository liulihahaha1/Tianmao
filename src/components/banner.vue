<template>
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div v-if="!img" class="fa fa-spinner fa-spin"></div>
            <div v-else class="swiper-slide"><img :src="img" alt=""></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>

    </div>
</template>

<script>
    // import Swiper from swiper;
 import Swiper from 'swiper'; 
 import {mapActions} from "vuex"
// import 'swiper/css/swiper.min.css';
export default {
      data(){
        return {
          img:"",
          banners:[
            {id:"1" , img:require("../assets/1.jpg")},
            {id:"2" , img:require("../assets/2.jpg")},
            {id:"3" , img:require("../assets/3.jpg")},
            {id:"4" , img:require("../assets/4.jpg")}

          ],
          good:{}
        }
      },
      methods: {
        ...mapActions(["addGoodInCar"])
      },
      created(){
        // console.log(this.$route.params.id)
        this.$http.get("/api/homebanner/banner/?id="+ this.$route.params.id).then(res => {
            // console.log(res);
            var arr = res.data.data.object_list[6].skuInfo;
            // console.log(arr);
              for(var j = 0; j < arr.length; j++){
                // console.log(arr[j].skuId)
                if(arr[j].spuId == this.$route.params.id){
                  this.img = arr[j].images;
                  this.good = arr[j];
                  // console.log(arr[j])
                }
              }
            
        })
        this.$nextTick(()=>{
            new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              // paginationClickable: true,
              pagination: '.swiper-pagination',
        paginationType: 'fraction'

        },
            
          
      
          })
        })
          
      },
      mounted() {
        
      },
};
</script>

<style lang="scss">
 html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: .14rem;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 3.6rem;
      margin-top: .1rem;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .swiper-slide {
      text-align: center;
      font-size: .18rem;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-pagination{
      position: absolute;
      bottom: 0
    }
    
</style>