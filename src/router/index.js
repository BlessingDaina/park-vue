import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/layout/index'
import login from '@/views/login'
import parkingHome from '@/views/layout/parking/parkingHome'
import parkInfo from '@/views/layout/parking/park-info'
import personalManagement from '@/views/layout/parking/personal-management'
import carType from '@/views/layout/parking/car-type'
import channelManagement from '@/views/layout/parking/channel-management'
import freeCar from '@/views/layout/parking/free-car'
import blackCar from '@/views/layout/parking/black-car'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'parking/park-info',
          name: 'park-info',
          component: parkInfo
        }, {
          path: 'parking/personal-management',
          name: 'personal-management',
          component: personalManagement
        }, {
          path: 'parking/channel-management',
          name: 'channel-management',
          component: channelManagement
        }, {
          path: 'parking/free-car',
          name: 'free-car',
          component: freeCar
        }, {
          path: 'parking/black-car',
          name: 'blace-car',
          component: blackCar
        }, {
          path: 'parking/car-type',
          name: 'car-type',
          component: carType
        }, {
          path: 'parking/parkingHome.php',
          name: 'parkingHome',
          component: parkingHome
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

// 路由拦截器
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    let token = sessionStorage.getItem('token')
    if (token === null || token === '') {
      console.log(34)
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
