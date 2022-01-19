import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = Promise.all(routes).then(routes => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
})

export default router