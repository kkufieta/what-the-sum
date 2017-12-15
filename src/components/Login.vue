<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import { config } from '../helpers/firebaseConfig'

// TODO: AUTH HERE
export default {
  name: 'Login',
  mounted () {
    var uiConfig = {
      // signInSuccessUrl: '',
      signInOptions: [
        // Specify providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url can be specified and will show up in the widget.
      tosUrl: '<your-tos-url>'
    }
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>


<style>

</style>
