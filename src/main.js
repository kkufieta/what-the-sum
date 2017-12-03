// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import { config } from './helpers/firebaseConfig'

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(VueChartkick, { Chartkick })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    const app = firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/game')
      } else {
        this.$router.push('/')
      }
    })
    let db = app.database()
    // ADD DB REFS HERE
  },
  template: '<App/>',
  components: { App }
})
