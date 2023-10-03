import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
// router를 import
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  // router 추가
  router
}).$mount('#app')
