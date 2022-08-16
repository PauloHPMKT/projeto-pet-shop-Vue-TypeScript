import { createRouter, createWebHistory } from 'vue-router'

const About = '../views/About.vue'
const Home = '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(Home),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(About),
    }
  ]
})

export default router
