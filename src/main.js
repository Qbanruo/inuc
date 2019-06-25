// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
