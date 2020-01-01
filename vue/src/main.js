import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import vuex from 'vuex'
import {store} from './store'
import VSwitch from 'v-switch-case'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VSwitch)

new Vue({
  vuetify,
  router,
  axios,
  vuex,
  store,
  render: h => h(App)
}).$mount('#app')
