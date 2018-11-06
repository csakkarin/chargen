import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import CreationWizard from './components/wizard/CreationWizard.vue';
import './registerServiceWorker';
import '@/assets/css/tailwind.css';


// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    CreationWizard,
  },
});
