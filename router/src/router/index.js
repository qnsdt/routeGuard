import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

router.beforeEach(function(to,from,next){
  // const nextRoute = [ 'account', 'order', 'course'];
  // console.log(from)
  console.log(to) 
  if(to.name == 'HelloWorld'){
    if(window.localStorage.getItem('userInfo')){
      // next('home')
      router.push('home')
    }
  }
  next()
})
