import Vue from 'vue'
import App from './App.vue'
// store.js를 import
import { store } from './store/store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // store 추가
  store,
}).$mount('#app')
