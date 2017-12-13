<template>
  <div id="buy-sell" class="row">
    <div class="col s12 button-div">
      <button class="waves-effect waves-light btn" @click.stop="sendBuy">Buy at {{lowestOffer}}</button>
    </div>
    <div class="col s12 button-div">
      <button class="waves-effect waves-light btn" @click.stop="sendSell">Sell at {{lowestBid}}</button>
    </div>
    <!-- USER's OWN bid and offer in yellow or green -->
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'BidOffer',
  data () {
    return {}
  },
  firebase: {
    currentBids: db.ref('games/game1/current_bids'),
    currentOffers: db.ref('games/game1/current_offers')
  },
  methods: {
    getMin (arr) {
      return Math.min.apply(Math, arr)
    },
    sendBuy (e) {
      const lowestOffer = this.currentOffers.map(offer => offer['.key'])
      console.log(this.getMin(lowestOffer))
      // this.$firebaseRefs.currentBids.push({ bidPrice: 'userOne' })
    },
    sendSell (e) {
      const lowestBid = this.currentBids.map(bid => bid['.key'])
      console.log(this.getMin(lowestBid))
      // console.log('i sent', this.newOffer.value)
    }
  },
  computed: {
    lowestOffer: function () {
      const lowestOffer = this.currentOffers.map(offer => offer['.key'])
      return this.getMin(lowestOffer)
    },
    lowestBid: function () {
      const lowestBid = this.currentBids.map(bid => bid['.key'])
      return this.getMin(lowestBid)
    }
  }
}
</script>

<style scoped>
  #buy-sell {
    padding-top: 90px;
  }
  .button-div {
    padding: 15px 0;
  }
</style>
