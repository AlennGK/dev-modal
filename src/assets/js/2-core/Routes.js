// CONFIG
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


// COMPONENTS
import Modal from '../5-pages/Modal.vue';

// ROUTES
const Router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'modal',
      component: Modal
    }

  ],

  linkActiveClass: 'is-active'
});


export default Router;
