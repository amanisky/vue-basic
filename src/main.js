import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import corePlugin from '@/plugin'

Vue.use(corePlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
