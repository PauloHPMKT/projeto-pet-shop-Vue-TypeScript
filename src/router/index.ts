import { createRouter, createWebHistory } from 'vue-router'

//separar rotas em um arquivo exportado
const Home = '../views/Home.vue'
const About = '../views/About.vue'
const Service = '../views/Service.vue'
const Gallery = '../views/Gallery.vue'
const Contact = '../views/Contact.vue'

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
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(Service),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(Gallery),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(Contact),
    }
  ]
})

export default router
