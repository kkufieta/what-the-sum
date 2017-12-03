<template>
  <div id="game">
    <div class="container">
      {{ db.ref('games') }}
      <Values></Values>
      <Plot></Plot>
      <BidOffer></BidOffer>
    </div>
  </div>
</template>

<script>
import BidOffer from './BidOffer'
import Values from './Values'
import Plot from './Plot'

export default {
  name: 'Game',
  components: {
    BidOffer,
    Plot,
    Values
  },
  // firebase: {
  //   currentRound: db.ref(`games/${'game1'}/current_round`),
  //   currentOffers: db.ref(`games/${'game1'}/current_offers`),
  //   currentBids: db.ref(`games/${'game1'}/current_bids`),
  //   rounds: db.ref(`games/${'game1'}/current_offers`),
  //   publicNumber: db.ref(`games/${'game1'}/public_number`)
  // },
  props: ['db']
}
</script>

<style>

</style>
