import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Machines from '@/components/Machines/Index'
import AddMachine from '@/components/AddMachine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/machines',
      name: 'machines',
      component: Machines
    },
    {
      path: '/machines/add',
      name: 'machines-add',
      component: AddMachine
    },
    {
      path: '*',
      redirect: 'machines'
    }
  ]
})
