<template>
  <div id="bid-offer" class="row">
    <div class="col s2">
      <input type="number" v-model="newBid.value" />
    </div>
    <div class="col s4">
      <button class="waves-effect waves-light btn" @click.stop="sendBid" >Bid at {{ newBid.value || 0 }}</button>
    </div>
    <div class="col s2">
      <input type="number" v-model="newOffer.value"/>
    </div>
    <div class="col s4">
      <button class="waves-effect waves-light btn" @click.stop="sendOffer">Offer at {{ newOffer.value || 0 }}</button>
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
    users: db.ref('games/game1/users')
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
      this.$firebaseRefs.game.child('current_bids').child(bidPrice).child(this.userId).set(new Date().getTime())
      this.$firebaseRefs.users.child(this.userId).child('active_bid').set(bidPrice)
    },
    sendOffer (e) {
      const offerPrice = this.newOffer.value
      this.$firebaseRefs.game.child('current_offers').child(offerPrice).child(this.userId).set(new Date().getTime())
      this.$firebaseRefs.users.child(this.userId).child('active_offer').set(offerPrice)
    }
  }
}
</script>

<style scoped>
</style>
