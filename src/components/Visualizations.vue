<template>
  <div class="row">
    <div class="col s5">
      <Plot></Plot>
    </div>
    <div class="col s5">
      <Histogram></Histogram>
    </div>
    <div class="col s2">
      <InstantButtons></InstantButtons>
    </div>
  </div>
</template>

<script>
import Plot from './Plot'
import Histogram from './Histogram'
import InstantButtons from './InstantButtons'

export default {
  name: 'Visualizations',
  components: {
    Plot,
    Histogram,
    InstantButtons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
