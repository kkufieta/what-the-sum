<template>
  <div id="game">
    <div class="container">
      {{ db.ref('games') }}
      <Values></Values>
      <Visualizations></Visualizations>
      <BidOffer></BidOffer>
    </div>
  </div>
</template>

<script>
import BidOffer from './BidOffer'
import Values from './Values'
import Visualizations from './Visualizations'

export default {
  name: 'Game',
  components: {
    BidOffer,
    Visualizations,
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
