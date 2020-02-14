import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Find from '@/view/Find'
import Mine from '@/view/Mine'
import List from '@/view/List'
import Footer from '@/components/Footer'
import Cate from '@/components/cate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Cate',
      name: 'Cate',
      component: Cate
    }
  ]
})
