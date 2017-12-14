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
    game: {
      source: db.ref(`/games/game1`),
      asObject: true
    },
    rounds: {
      source: db.ref('/games/game1/rounds'),
      asObject: true
    }
  },
  computed: {
    getRounds: function () {
      if (!this.game.public_number) return
      let publicNum = this.game.public_number && this.game.public_number.toString()
      let round = this.game.current_round
      let str = ''
      for (let i = 0; i < round; i++) {
        str += publicNum[i] + ' '
      }
      for (let i = round; i < this.rounds['.value']; i++) {
        str += 'X '
      }
      console.log(str)
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
