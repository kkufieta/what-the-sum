<template>
  <div class="hello row">
    <div class="col s12">
      <line-chart :data="values"></line-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Values',
  data () {
    return {
      values: [[1,1], [2,4], [3,9], [4,16]]
    }
  },
  methods: {
    getValues: function() {
      // TODO: Read in values from firebase
      let a = [[1,1], [2,4], [3,9], [4,16]];
      return a;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
