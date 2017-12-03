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
  // PROPS FOR GAMENUMBER HERE
  methods: {
    sendBid (e) {
      console.log('i sent', this.newBid.value)
      const bidPrice = this.newBid.value
      this.$firebaseRefs.currentBids.push({ bidPrice: 'userOne' })
      // TODO: firebase post bid
    },
    sendOffer (e) {
      console.log('i sent', this.newOffer.value)
      // TODO: firebase post offer
    }
  }
}
</script>

<style scoped>
</style>
