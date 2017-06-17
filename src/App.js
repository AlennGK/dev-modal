// VENDOR
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'

// CSS & PLUGINS
import './App.sass'
import swal from 'sweetalert2'
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment'

// VUE CORE
import VueBox from './vue/VueBox.vue'
import router from './vue/Routes.js'

// CONFIG
Vue.config.productionTip = false
/*global window: false */

// VUE USE
Vue.use(VueResource)
Vue.use(VueMoment)
Vue.use(Vuelidate)


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
