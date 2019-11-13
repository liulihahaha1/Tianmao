<template>
    <div class="main">
        <!-- 这是主页！ -->
       <!-- {{goods}} -->
       <yIndex></yIndex>
        这是主页！
       {{goods}}
       <compon/>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import { Toast } from 'mint-ui'; //使用minit-ui
import yIndex from "@/components/yIndex"
export default {
    components:{
        yIndex
import compon from "@/components/components.vue"
export default {
    components: {
        compon
    },
    computed:{
        ...mapState({
            goods:state=>state.myCar.cars
        })
    },
    created () {
        Toast({
            message: '提示',
            position: 'bottom',
            duration: 5000
        });
    }
}
</script>

<style>

</style>