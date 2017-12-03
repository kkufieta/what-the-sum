<template>
  <div id="bid-offer">
    <input type="number" v-model="newBid.value" />
    <button @click.stop="sendBid" >Bid at {{ newBid.value || 0 }}</button>
    <input type="number" v-model="newOffer.value"/>
    <button @click.stop="sendOffer">Offer at {{ newOffer.value || 0 }}</button>
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
  methods: {
    sendBid (e) {
      console.log('i sent', this.newBid.value)
      // TODO: firebase post bid
    },
    sendOffer (e) {
      console.log('i sent', this.newOffer.value)
      // TODO: firebase post offer
    }
  }
}
</script>

<style>

</style>
