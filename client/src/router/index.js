import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
  },
  {
    path: '/subject',
    component: Layout,
    children: [{
      path: '',
      name: 'subject',
      component: () => import('@/views/subject'),
      meta: { title: '课程详情' }
    }]
  },
  {
    path: '/',
    redirect: '/subjectManagement'
  },
  {
    path: '/subjectManagement',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/views/subjectManagement')
      }
    ]
  },
  {
    path: '/dashboard',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard')
      }
    ]
  },
  {
    path: '/class',
    component: Layout,
    meta: { title: '班级详情', icon: 'dashboard' }
  },
  {
    path: '/user',
    component: Home,
    children: [{
      path: '',
      component: () => import('@/views/user')
    }]

  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

export default router
