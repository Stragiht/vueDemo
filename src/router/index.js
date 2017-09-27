import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/page/index'
import Content from '@/page/content'
import Jq from '@/page/jq'
import Login from '@/page/login'
import ComComponent from '@/components/comComponent'
import App from '@/components/app'
import userList from '@/user/userList'
import addCompany from '@/user/addCompany'
import roleList from '@/setTing/roleList'
import PerMissionList from '@/setTing/perMissionList'
import ChangePasword from '@/setTing/changePasword'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/content/:id',
      component: Content
    },
    {
      path: '/jq',
      component: Jq
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/app',
      component: App,
      children: [
        {
          path: '/app/user',
          component: ComComponent,
          children: [
            {
              path: '/app/user/userList',
              component: userList,
              meta: {
                requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
              }
            },
            {
              path: '/app/user/addCompany',
              component: addCompany,
              meta: {
                requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
              }
            }
          ]
        },
        {
          path: '/app/setTing',
          component: ComComponent,
          children: [
            {
              path: '/app/setTing/roleList',
              component: roleList,
              meta: {
                requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
              }
            },
            {
              path: '/app/setTing/perMissionList',
              component: PerMissionList,
              meta: {
                requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
              }
            },
            {
              path: '/app/setTing/ChangePasword',
              component: ChangePasword,
              meta: {
                requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
              }
            }
          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('token')) {  // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router
