import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
import main from "./main"
import detail from "./detail"
import redirect  from "./redirect"
import goodlist from "./list"
import market from "./market"
const routes = [
  main,detail,redirect,goodlist,market
]

const router = new VueRouter({
  routes
})

export default router
