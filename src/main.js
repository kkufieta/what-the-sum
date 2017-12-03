// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'
// import firebaseui from 'firebaseui';
import { config } from './helpers/firebaseConfig'

Vue.config.productionTip = false

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/game')
      } else {
        this.$router.push('/')
      }
    })
  },
  template: '<App/>',
  components: { App }
})
