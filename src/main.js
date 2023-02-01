import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import Router from './plugins/route'
import './plugins/bootstrap-vue'
import './plugins/axios'

Vue.config.productionTip = false


new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
