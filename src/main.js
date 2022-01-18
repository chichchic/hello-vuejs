// bootstrap
import 'bootstrap'
import JQuery from 'jquery'
window.$ = JQuery

// css & scss
import 'bootstrap/scss/bootstrap.scss'
import 'hooper/dist/hooper.css'
import 'vue-scroll-picker/dist/style.css'

//libraries importing
import VueCountdown from '@chenfengyuan/vue-countdown'
import VueAnalytics from 'vue-analytics'
import VueUploadComponent from 'vue-upload-component'
import VueYoutube from 'vue-youtube'
import VueScrollPicker from 'vue-scroll-picker'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component('file-upload', VueUploadComponent)
Vue.component(VueCountdown.name, VueCountdown)
Vue.use(VueScrollPicker)
Vue.use(VueAnalytics, {
  id: 'UA-159915865-1',
  router,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
