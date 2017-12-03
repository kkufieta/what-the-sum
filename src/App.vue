<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
var firebase = require('firebase');
var firebaseui = require('firebaseui');
var config = {
  apiKey: 'AIzaSyC9EuB2YkkXFe0KCnU-RzkbAY_ZeZsLvPY',
  authDomain: 'wts-trading-game.firebaseapp.com',
  databaseURL: 'https://wts-trading-game.firebaseio.com',
  projectId: 'wts-trading-game',
  storageBucket: 'wts-trading-game.appspot.com',
  messagingSenderId: '902954785891'
}
let app = firebase.initializeApp(config)
let db = app.database()
// TODO: ADD DB REFS HERE

// LOGIN
var uiConfig = {
  signInSuccessUrl: 'loggedIn.html',
  signInOptions: [
    // Specify providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url can be specified and will show up in the widget.
  tosUrl: '<your-tos-url>'
};
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

export default {
  name: 'app'
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
</style>
