import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

//忽略重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/notification',
    name: 'notification',
    component: () => import('@/views/Notification.vue'),
    meta: { title: 'Notifications' }
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue'),
    name: 'profile',
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/category',
    component: () => import('@/views/Category.vue'),
    name: 'category',
    meta: {
      title: 'Category'
    }
  },
  {
    path: '/challenge',
    component: () => import('@/views/Challenge.vue'),
    name: 'challenge',
    meta: {
      title: 'Challenge'
    }
  },
  {
    path: '/user',
    component: () => import('@/views/User.vue'),
    name: 'user',
    meta: {
      title: 'Page'
    }
  },
  {
    path: '/contest',
    component: () => import('@/views/Contest.vue'),
    name: 'contest',
    meta: {
      title: 'Contest'
    }
  },
  {
    path: '/team',
    component: () => import('@/views/Team.vue'),
    name: 'team',
    meta: {
      title: 'Team',
    }
  },
  {
    path: '/container',
    component: () => import('@/views/Container.vue'),
    name: 'container',
    meta: {
      title: 'Container',
    }
  },
  {
    path: '/whale',
    component: () => import('@/views/Whale.vue'),
    name: 'whale',
    meta: {
      title: 'Whale',
    }
  },
  {
    path: '/error/404',
    name: '404 NOT FOUND',
    component: () => import('@/views/error/Error404.vue'),
    meta: { title: '' }
  },
  {
    path: '*',
    redirect: '/error/404'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
