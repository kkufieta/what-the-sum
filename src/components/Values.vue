<template>
  <div class="hello row">
    <div class="col s12">
      <h1>{{ getValues() }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Values',
  data () {
    return {}
  },
  methods: {
    getValues: function() {
      // TODO: Read in values from firebase
      let a = [1,2,3,4,5];
      let round = 1;
      let str = '';
      for (let i = 0; i < round; i++) {
        str += a[i] + ' ';
      }
      for (let i = round; i < a.length; i++) {
        str += 'X ';
      }
      return str;
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
