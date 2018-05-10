import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Phonebook from '@/components/Phonebook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/directorio',
      name: 'Phonebook',
      component: Phonebook
    }
  ]
})
