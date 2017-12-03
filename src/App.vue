<template>
  <div id="app">
    <i class="money material-icons">attach_money</i>
    <i class="money material-icons">attach_money</i>
    <i class="money material-icons">attach_money</i>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
import { config } from './helpers/firebaseConfig'
const app = firebase.initializeApp(config)
let db = app.database()

export default {
  name: 'app',
  data () {
    return {
      db
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .money {
    font-size: 100px;
    color: gold;
  }
</style>
