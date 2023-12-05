import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomeScreen from '../views/WelcomeScreen.vue'
import FavouriteView from '../views/FavouriteView.vue'
import TrendingView from '../views/TrendingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Welcome Screen',
    component: WelcomeScreen
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: FavouriteView
  },
  {
    path: '/trending',
    name: 'Trending',
    component: TrendingView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
