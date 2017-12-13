<template>
  <div id="buy-sell" class="row">
    <div class="col s12 button-div">
      <button class="waves-effect waves-light btn" @click.stop="sendBuy">Buy</button>
    </div>
    <div class="col s12 button-div">
      <button class="waves-effect waves-light btn" @click.stop="sendSell">Sell</button>
    </div>
    <!-- USER's OWN bid and offer in yellow or green -->
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
  #buy-sell {
    padding-top: 90px;
  }
  .button-div {
    padding: 15px 0;
  }
</style>
