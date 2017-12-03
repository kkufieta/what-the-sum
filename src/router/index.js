import Vue from 'vue'
import Router from 'vue-router'
import Values from '@/components/Values'
import Game from '@/components/Game'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
