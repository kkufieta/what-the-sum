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

export default {
  name: 'Game',
  components: {
    BidOffer,
    Plot,
    Values
  }
}
</script>

<style>

</style>
