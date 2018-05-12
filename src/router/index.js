import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AboutUs from '@/components/AboutUs'
import Phonebook from '@/components/Phonebook'
import News from '@/components/News'
import Organization from '@/components/Organization'
import Academics from '@/components/Academics'
import Announcements from '@/components/Announcements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/noticias',
      name: 'News',
      component: News
    },
    {
      path: '/historia',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/organizacion',
      name: 'Organization',
      component: Organization
    },
    {
      path: '/directorio',
      name: 'Phonebook',
      component: Phonebook
    },
    {
      path: '/convocatorias',
      name: 'Announcements',
      component: Announcements
    },
    {
      path: '/academicos',
      name: 'Academics',
      component: Academics
    }
  ]
})
