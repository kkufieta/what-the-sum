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
      console.log(this.game)
      let num = this.game[6]
      let rounds = this.game[8]
      if (!num && !rounds) return
      let a = num['.value'].toString()
      let round = rounds['.value']
      let str = ''
      for (let i = 0; i < round; i++) {
        str += a[i] + ' '
      }
      if (!a) return str
      str = a + ' ';
      for (let i = a.length; i < round; i++) {
        str += 'X '
      }
      return str
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
