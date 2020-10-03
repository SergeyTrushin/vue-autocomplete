import Vue from 'vue'
import App from './App.vue'
import '../node_modules/normalize.css/normalize.css';
import Autocomplete from 'v-autocomplete';

Vue.config.productionTip = false
Vue.use(Autocomplete)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
