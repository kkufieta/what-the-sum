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
      }
    }
  },
  firebase: {
    currentBids: db.ref(`/games/${'game1'}/current_bids/price`),
    currentOffers: db.ref(`games/${'game1'}/current_offers/price`)
  },
  // PROPS FOR GAMENUMBER HERE
  methods: {
    sendBid (e) {
      const bidPrice = this.newBid.value
      this.$firebaseRefs.currentBids.child(bidPrice).once('value', (snapshot) => {
        let bids = snapshot.val()
        if (bids) {
          bids = bids.concat(['user1'])
        } else {
          bids = ['user1']
        }
        this.$firebaseRefs.currentBids.child(bidPrice).set(bids)
      })
      // TODO: firebase post bid
    },
    sendOffer (e) {
      const offerPrice = this.newOffer.value
      this.$firebaseRefs.currentOffers.child(offerPrice).once('value', (snapshot) => {
        let offers = snapshot.val()
        if (offers) {
          offers = offers.concat(['user1'])
        } else {
          offers = ['user1']
        }
        this.$firebaseRefs.currentOffers.child(offerPrice).set(offers)
      })

      console.log('i sent', this.newOffer.value)
      // TODO: firebase post offer
    }
  }
}
</script>

<style scoped>
</style>
