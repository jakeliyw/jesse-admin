import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/navigationBar/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/mallHomepage',
        name: 'mallHomepage',
        component: () => import('@/views/shoppingMall/mallHomepage')
      },
      {
        path: '/productCategory',
        name: 'productCategory',
        component: () => import('@/views/shoppingMall/productCategory')
      },
      {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: () => import('@/views/shoppingMall/shoppingCart')
      },
      {
        path: '/createCustomer',
        name: 'createCustomer',
        component: () => import('@/views/customerManagement/createCustomer')
      },
      {
        path: '/customerArchives',
        name: 'customerArchives',
        component: () => import('@/views/customerManagement/customerArchives')
      },
      {
        path: '/jurisdiction',
        name: 'jurisdiction',
        component: () => import('@/views/jurisdiction')
      },
      {
        path: '/navigationBar',
        name: 'navigationBar',
        component: () => import('@/views/navigationBar')
      },
      {
        path: '/afterSaleOrder',
        name: 'afterSaleOrder',
        component: () => import('@/views/orderManagement/afterSaleOrder')
      },
      {
        path: '/completeTheOrder',
        name: 'completeTheOrder',
        component: () => import('@/views/orderManagement/completeTheOrder')
      },
      {
        path: '/ordersInProduction',
        name: 'ordersInProduction',
        component: () => import('@/views/orderManagement/orderInProgress/ordersInProduction')
      },
      {
        path: '/proofingOrder',
        name: 'proofingOrder',
        component: () => import('@/views/orderManagement/orderInProgress/proofingOrder')
      },
      {
        path: '/outstandingOrders',
        name: 'outstandingOrders',
        component: () => import('@/views/orderManagement/outstandingOrders')
      },
      {
        path: '/personalCenter',
        name: 'personalCenter',
        component: () => import('@/views/personalCenter')
      },
      {
        path: '/deliveredSales',
        name: 'deliveredSales',
        component: () => import('@/views/salesManagement/deliveredSales')
      },
      {
        path: '/salesLeaderboard',
        name: 'salesLeaderboard',
        component: () => import('@/views/salesManagement/salesLeaderboard')
      },
      {
        path: '/unsoldSales',
        name: 'unsoldSales',
        component: () => import('@/views/salesManagement/unsoldSales')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
