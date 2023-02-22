import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCurrencyFilter from 'vue-currency-filter'
import Vuelidate from 'vuelidate';
import { ValidationProvider } from 'vee-validate'
import { ValidationObserver } from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


Vue.use(Vuelidate);

Vue.config.productionTip = false
Vue.use(VueCurrencyFilter,
  {
    name:'rupee',
    symbol : '₹',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true,
    avoidEmptyDecimals: undefined,
  })

new Vue({
  router,
  store,
  vuetify,
  VueCurrencyFilter,
  render: h => h(App)
}).$mount('#app')
