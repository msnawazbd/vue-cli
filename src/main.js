import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import jQuery from 'jquery'

// set jQuery globally
jQuery.$ = window.jQuery = jQuery

// import bootstrap popper.js and app.scss
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

// set base url
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

// express axios globally
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
