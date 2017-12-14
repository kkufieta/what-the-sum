<template>
  <div id="bid-offer" class="row">
    <div class="col s2">
      <input type="number" v-model="newBid.value" />
    </div>
    <div class="col s4">
      <button class="waves-effect waves-light btn" @click.stop="sendBid" >Bid at {{ newBid.value || 0 }}</button>
      <button class="waves-effect waves-light btn" @click.stop="cancelBid">Cancel Bid</button>
    </div>
    <div class="col s2">
      <input type="number" v-model="newOffer.value"/>
    </div>
    <div class="col s4">
      <button class="waves-effect waves-light btn" @click.stop="sendOffer">Offer at {{ newOffer.value || 0 }}</button>
      <button class="waves-effect waves-light btn" @click.stop="cancelOffer">Cancel Offer</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'BidOffer',
  data () {
    return {
      newBid: {
        value: 10
      },
      newOffer: {
        value: 20
      },
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
    }
  },
  firebase: {
    game: db.ref('games/game1'),
    users: db.ref('games/game1/users'),
    currentBids: db.ref('games/game1/current_bids'),
    currentOffers: db.ref('games/game1/current_offers')
  },
  created () {
    this.user = firebase.auth().currentUser
    if (this.user) {
      this.name = this.user.displayName
      this.email = this.user.email
      this.photo = this.user.photoURL
      this.userId = this.user.uid
    }
  },
  methods: {
    sendBid (e) {
      const bidPrice = this.newBid.value
      this.$firebaseRefs.users.child(this.userId).child('active_bid').set(bidPrice)
      this.currentBids.forEach(bid => {
        if (bid[this.userId]) this.$firebaseRefs.currentBids.child(bid['.key']).child(this.userId).set(null)
      })
      this.$firebaseRefs.game.child('current_bids').child(bidPrice).child(this.userId).set(new Date().toLocaleTimeString())
    },
    sendOffer (e) {
      const offerPrice = this.newOffer.value
      this.$firebaseRefs.users.child(this.userId).child('active_offer').set(offerPrice)
      this.currentOffers.forEach(offer => {
        if (offer[this.userId]) this.$firebaseRefs.currentOffers.child(offer['.key']).child(this.userId).set(null)
      })
      this.$firebaseRefs.game.child('current_offers').child(offerPrice).child(this.userId).set(new Date().toLocaleTimeString())
    },
    cancelBid () {
      this.$firebaseRefs.users.child(this.userId).child('active_bid').set(null)
      this.currentBids.forEach(bid => {
        if (bid[this.userId]) this.$firebaseRefs.currentBids.child(bid['.key']).child(this.userId).set(null)
      })
    },
    cancelOffer () {
      this.$firebaseRefs.users.child(this.userId).child('active_offer').set(null)
      this.currentOffers.forEach(offer => {
        if (offer[this.userId]) this.$firebaseRefs.currentOffers.child(offer['.key']).child(this.userId).set(null)
      })
    }
  }
}
</script>

<style scoped>
</style>
