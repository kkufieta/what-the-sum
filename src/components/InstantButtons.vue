<template>
  <div id="buy-sell" class="row">
    <div class="col s12">
      <button @click.stop="sendBuy" >Buy</button>
      <button @click.stop="sendSell">Sell</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BidOffer',
  data () {
    return {}
  },
  methods: {
    sendBuy (e) {
      // this.$firebaseRefs.currentBids.push({ bidPrice: 'userOne' })
      // TODO: firebase post buy
    },
    sendSell (e) {
      // console.log('i sent', this.newOffer.value)
      // TODO: firebase post sell
    }
  }
}
</script>

<style scoped>
button {
  font-size: 25px;
  padding: 10px 20px 10px 20px;
}
</style>
