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
