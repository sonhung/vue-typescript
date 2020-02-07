import Vue from 'vue';
import Router, { Route } from 'vue-router';
import store from '@/store/store';
import Home from '@/views/home/Home.vue';
import Login from '@/views/login/Login.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    // otherwise redirect to page not found
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // if (authRequired && !loggedIn) {
  //   return next('/login');
  // }

  next();
})

export default router;
