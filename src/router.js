import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Hero from './views/Hero.vue'

Vue.use(Router); // Register and use a package in VueJs.

const routes = [
    { name: 'home',  path: '/',         component: Home },
    { name: 'about', path: '/about',    component: About }, 
    { name: 'hero',  path: '/hero/:id', component: Hero }, 

  ]
  
const router = new Router({
    mode: 'history', //Remove the # from the link address
    routes
})

export default router;