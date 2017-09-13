import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/page/index'
import Content from '@/page/content'
import Jq from '@/page/jq'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
