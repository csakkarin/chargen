import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSwords} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CreationWizard from './components/wizard/CreationWizard.vue';

import './registerServiceWorker';
import '@/assets/css/tailwind.css';
import '@/assets/css/vue-form-wizard.min.css';

Vue.use(VeeValidate);

library.add(faSwords);

Vue.component('font-awesome-icon', FontAwesomeIcon);


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
