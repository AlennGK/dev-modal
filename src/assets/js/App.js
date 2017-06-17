// VENDOR
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'
import axios from 'axios'
import swal from 'sweetalert2'

// VUE CORE
import VueBox from './VueBox.vue'
import router from './2-core/Routes.js'

// CONFIG
Vue.config.productionTip = false
/*global window: false */

// VUE USE
Vue.use(VueResource)
Vue.use(VueMoment)

// GLOBAL WINDOWS

window.Vue = Vue
window.axios = axios
window.swal = swal

// GLOBAL COMPONENTS
Vue.component('vue', VueBox)

// VUE INSTANCE
new Vue({
  el: 'vue',
  render: h => h(VueBox),
  router
})
