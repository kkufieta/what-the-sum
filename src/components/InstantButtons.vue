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
    return {
      userId: '',
      user: {}
    }
  },
  firebase: {
    currentBids: db.ref('games/game1/current_bids'),
    currentOffers: db.ref('games/game1/current_offers'),
    users: db.ref('games/game1/users'),
    trade_history: db.ref('games/game1/trade_history'),
    public_ledger: db.ref('games/game1/public_ledger')
  },
  created () {
    this.user = firebase.auth().currentUser
    if (this.user) {
      this.userId = this.user.uid
    }
  },
  methods: {
    getMin (arr) {
      return Math.min.apply(Math, arr)
    },
    firstSellerNotMe (ref, val) {
      const [best] = ref.filter(el => el['.key'] === val.toString())
      const otherUser = Object.keys(best).filter(key => key !== '.key')
        .filter(userId => userId !== this.userId)
      if (!otherUser.length) return // ERROR HANDLE HERE
      return otherUser[0]
    },
    sendBuy (e) {
      const lowestOffer = this.getMin(this.currentOffers.map(offer => offer['.key']))
      const offerer = this.firstSellerNotMe(this.currentOffers, lowestOffer)
      if (!offerer) return
      this.$firebaseRefs.currentOffers.child(lowestOffer).child(offerer).set(null)
      const trade = {
        buy_sell: 'buy',
        price: lowestOffer,
        time: new Date().toLocaleTimeString()
      }
      this.$firebaseRefs.users.child(this.userId).child('trade_history').push(trade)
      this.$firebaseRefs.trade_history.push({ seller: offerer, buyer: this.userId, price: lowestOffer, time: new Date().toLocaleTimeString() })
      this.$firebaseRefs.public_ledger.push({ price: lowestOffer, time: new Date().toLocaleTimeString() })
      this.$firebaseRefs.users.child(offerer).child('active_offer').set(null)
    },
    sendSell (e) {
      const lowestBid = this.getMin(this.currentBids.map(bid => bid['.key']))
      const bidder = this.firstSellerNotMe(this.currentBids, lowestBid)
      if (!bidder) return
      this.$firebaseRefs.currentBids.child(lowestBid).child(bidder).set(null)
      const trade = {
        buy_sell: 'sell',
        price: lowestBid,
        time: new Date().toLocaleTimeString()
      }
      this.$firebaseRefs.users.child(this.userId).child('trade_history').push(trade)
      this.$firebaseRefs.trade_history.push({ seller: this.userId, buyer: bidder, price: lowestBid, time: new Date().toLocaleTimeString() })
      this.$firebaseRefs.public_ledger.push({ price: lowestBid, time: new Date().toLocaleTimeString() })
      this.$firebaseRefs.users.child(bidder).child('active_bid').set(null)
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
