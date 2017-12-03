<template>
  <div class="hello row">
    <div class="col s12">
      <h1>{{ getRounds }}</h1>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'Values',
  firebase: {
    game: db.ref(`/games/${'game1'}`)
  },
  computed: {
    getRounds: function () {
      // let rounds = this.game[8]['.value']
      // a = public number
      // round = rounds
      // TODO: Read in values`
      let a = this.game[6]['.value']
      let round = this.game[8]['.value']
      let str = ''
      for (let i = 0; i < round; i++) {
        str += a[i] + ' '
      }
      for (let i = round; i < a.length; i++) {
        str += 'X '
      }
      console.log(str)
      return str;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
