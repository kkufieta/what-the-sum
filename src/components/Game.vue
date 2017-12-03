<template>
  <div id="game">
    <div class="container">
      <Values></Values>
      <BidOffer></BidOffer>
    </div>
  </div>
</template>

<script>
import BidOffer from './BidOffer'
import Values from './Values'

export default {
  name: 'Game',
  components: {
    BidOffer,
    Values
  }
}
</script>

<style>

</style>
