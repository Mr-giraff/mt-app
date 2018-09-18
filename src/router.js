import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Goods from 'views/goods/Goods'
import Comments from 'views/comments/Comments'
import Sellers from 'views/sellers/Sellers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  //   }
  // ]
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments,
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: Sellers,
    }
  ],
  linkActiveClass: 'active'
})
