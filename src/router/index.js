import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home/index'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('@/components/person/index'),
    meta: {
      title: '个人中心'
    }
  }
]
const router = new Router({
  mode: 'history',
  routes
})

router.afterEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
