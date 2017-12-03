<template>
  <div id="game">
    <div class="container">
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

// const currentRound = db.ref(`games/${'game1'}/current_round`)
//
// const rounds = db.ref(`games/${'game1'}/current_offers`)
// const publicNumber = db.ref(`games/${'game1'}/public_number`)

export default {
  name: 'Game',
  components: {
    BidOffer,
    Plot,
    Values
  },
  data () {

  }
}
</script>

<style>

</style>
