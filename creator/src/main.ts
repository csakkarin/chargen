import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import WizardStep1 from './components/wizard/WizardStep1.vue';
import './registerServiceWorker';

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    WizardStep1,
  }

});
//.$mount('#app');
