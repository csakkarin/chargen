import Vue from 'vue';
import Router from 'vue-router';
import HeroCreator from './components/HeroCreator.vue';
import CreationWizard from './components/wizard/CreationWizard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HeroCreator,
    },
    {
      path: '/wizard',
      name: 'Wizard',
      component: CreationWizard,
    }
  ]
})