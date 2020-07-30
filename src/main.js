import Vue from 'vue'
import App from './App.vue'
import plugTest from './index.js'
Vue.use(plugTest)

new Vue({
  el: '#app',
  render: h => h(App)
})
