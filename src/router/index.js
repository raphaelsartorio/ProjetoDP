import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import teste1 from '@/components/teste1'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/teste1',
      name: 'teste1',
      component: teste1
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
