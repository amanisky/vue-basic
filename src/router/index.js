import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
/* eslint-disable */
const router = new VueRouter({
  routes
})

/**
 * 路由拦截权限验证
 */
router.beforeEach((to, from, next) => {
  next()
})


/**
 * 路由完成
 */
router.afterEach(to => {
  console.log('路由完成...')
})

export default router