import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from './home'
import audio from './audio'
import broadcast from './broadcast'
import group from './group'
import mine from './mine'
import moviedetail from './moviedetail'
const routes = [
  { path: '/', redirect: 'home' },
  home, audio, broadcast, group, mine, moviedetail,
  { path: '/notfound', component: () => import('@/views/Notfound/Notfound') },
  { path: '*', redirect: 'notfound' }
]

const router = new VueRouter({
  routes
})

export default router