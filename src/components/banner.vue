<template>
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
            class="swiper-slide"
            v-for="item in banners"
            :key="item.id"
          ><img :src="item.img" alt=""></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>

    </div>
</template>

<script>
    // import Swiper from swiper;
 import Swiper from 'swiper'; 
// import 'swiper/css/swiper.min.css';
export default {
      data(){
        return {
          banners:[
            {id:"1" , img:require("../assets/1.jpg")},
            {id:"2" , img:require("../assets/2.jpg")},
            {id:"3" , img:require("../assets/3.jpg")},
            {id:"4" , img:require("../assets/4.jpg")}

          ]
        }
      },
      methods: {
       
      },
      created(){
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