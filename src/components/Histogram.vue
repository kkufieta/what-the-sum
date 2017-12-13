<template>
  <div class="hello row">
    <div class="col s12">
      <bar-chart :data="getBidsAndOffers" :colors="['#c533cc', '#3365cc']" legend="bottom" xtitle="Number of Bids/Offers" ytitle="Values of Bids/Offers" :stacked="true"></bar-chart>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
let db = firebase.database()

export default {
  name: 'Values',
  data () {
    return {
      values: []
    }
  },
  firebase: {
    currentBids: db.ref('games/game1/current_bids'),
    currentOffers: db.ref('games/game1/current_offers')
  },
  computed: {
    getBidsAndOffers: function () {
      const bids = this.currentBids.map(bids => {
        // Subtract one to avoid including key in count
        const bidQuantity = Object.keys(bids).length - 1
        return [bids['.key'], bidQuantity]
      })
      const offers = this.currentOffers.map(offers => {
        // Subtract one to avoid including key in count
        const offerQuantity = Object.keys(offers).length - 1
        return [offers['.key'], offerQuantity]
      })
      return [
        {name: 'Bids', data: bids},
        {name: 'Offers', data: offers}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
