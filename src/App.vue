<template>
  <div id="app">
     <keep-alive exclude="detail">
        <router-view/>
     </keep-alive>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  methods:{
    ...mapActions(["initCars"])
  },
  created() {
     this.initCars();
  },
}
</script>
<style lang="scss">
    *{
      margin: 0px;
      padding:0px;
    }
</style>
