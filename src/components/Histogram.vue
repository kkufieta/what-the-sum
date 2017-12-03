<template>
  <div class="hello row">
    <div class="col s12">
      <bar-chart :data="data" :stacked="true" :legend="true"></bar-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Values',
  data () {
    return {
      values: [],
      data: [
        {name: 'Number of Bids at this value', data: [[9,4], [7,16], [4,16], [2,1]]},
        {name: 'Number of Offers at this value', data: [[10,1], [5,9]]}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
