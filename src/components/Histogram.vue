<template>
  <div class="hello row">
    <div class="col s12">
      <bar-chart :data="getBidsAndOffers" :stacked="true" :legend="true"></bar-chart>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
let db = firebase.database()

let gameRef = db.ref(`/games/${'game1'}`)
export default {
  name: 'Values',
  data () {
    return {
      values: []
    }
  },
  firebase: {
    game: gameRef
  },
  computed: {
    getBidsAndOffers: function() {
      let bids = []
      let offers = []
      if (this.game.length > 1 && this.game[0].hasOwnProperty('price')) {
        console.log(this.game[0].price);
        let obj = this.game[0].price;
        for (let item in obj) {
          console.log(item)
          console.log(obj[item].length)
          item = parseInt(item, 10)
          bids.push([item, obj[item].length])
        }
      }
      if (this.game.length > 1 && this.game[1].hasOwnProperty('price')) {
        console.log(this.game[1].price);
        let obj = this.game[1].price;
        for (let item in obj) {
          console.log(item)
          console.log(obj[item].length)
          item = parseInt(item, 10)
          offers.push([item, obj[item].length])
        }
      }

      let data = [
        {name: 'Number of Bids at this value', data: bids},
        {name: 'Number of Offers at this value', data: offers}
      ]
      return data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
