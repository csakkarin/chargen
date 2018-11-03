import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import WizardStep1 from './components/wizard/WizardStep1.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/wizard',
      name: 'Wizard',
      component: WizardStep1
    }
  ]
})