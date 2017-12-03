<template>
  <div id="game">
    <div class="container">
      {{ rounds }}
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

// const currentRound = db.ref(`games/${'game1'}/current_round`)
//
// const rounds = db.ref(`games/${'game1'}/current_offers`)
// const publicNumber = db.ref(`games/${'game1'}/public_number`)

export default {
  name: 'Game',
  components: {
    BidOffer,
    Visualizations,
    Values
  }

}
</script>

<style>

</style>
