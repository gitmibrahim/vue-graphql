import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router.js";

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
