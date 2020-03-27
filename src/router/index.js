import Vue from 'vue'
import VueRouter from 'vue-router'

import Pos from '../components/page/Pos'
import Money from '../components/page/Money'
import Goods from '../components/page/Goods'
import Vip from '../components/page/Vip'
import Setting from '../components/page/Setting'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/pos'
  },
  {
    path: '/pos',
    name: 'Pos',
    component: Pos
  },
  {
    path: '/money',
    name: 'Money',
    component: Money 
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  ,
  {
    path: '/vip',
    name: 'Vip',
    component: Vip

  }
]

const router = new VueRouter({
  routes
})

export default router
