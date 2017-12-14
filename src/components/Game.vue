<template>
  <div id="game">
    <div class="container">
      {{ rounds }}
      <div v-if="ranking" class="col s6">
        <table class="centered">
          <thead>
            <tr>
              <th>Your Score</th>
              <th>Your Ranking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ score }}</td>
              <td>{{ ranking }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Values></Values>
      <Visualizations></Visualizations>
      <BidOffer></BidOffer>
    </div>
  </div>
</template>

<script>
import BidOffer from './BidOffer'
import Values from './Values'
import Visualizations from './Visualizations'
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'Game',
  components: {
    BidOffer,
    Visualizations,
    Values
  },
  data () {
    return {
      userId: '',
      email: '',
      user: {},
      myRank: ''
    }
  },
  created () {
    this.user = firebase.auth().currentUser
    if (this.user) {
      this.userId = this.user.uid
      this.email = this.user.email
    }
  },
  firebase: {
    scoreboard: db.ref('games/game1/scoreboard')
  },
  computed: {
    ranking: function () {
      let myRank
      this.$firebaseRefs.scoreboard.orderByValue().once('value', (snapshot) => {
        const rankings = snapshot.val()
        if (!rankings) return
        myRank = (Object.keys(rankings).reverse().indexOf(this.userId) + 1) + '/' + (Object.keys(rankings).length)
      })
      return myRank
    },
    score: function () {
      const [myScore] = this.scoreboard.filter(score => score['.key'] === this.userId)
      return myScore['.value']
    }
  }
}
</script>

<style>

</style>
