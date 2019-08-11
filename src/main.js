import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(VueClipboard)

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
