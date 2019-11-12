<template>
    <div class="main">
        这是主页！
       {{goods}}
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import { Toast } from 'mint-ui'; //使用minit-ui
export default {
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