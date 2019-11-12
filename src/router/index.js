import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import main from "./main"
import detail from "./detail"
import redirect  from "./redirect"
import goodlist from "./list"
const routes = [
  main,detail,redirect,goodlist
]

const router = new VueRouter({
  routes
})

export default router
