<template>
  <div class="hello row">
    <div class="col s12">
      <line-chart :data="getValues"></line-chart>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
let db = firebase.database()

let publicLedgerRef = db.ref(`/games/${'game1'}/public_ledger`)

function ledgerToArray(obj) {
  var returnArr = [];
  if (obj.length === 0) {
    return returnArr;
  }
  
  obj.forEach(function(childObj) {
    var x = childObj.time;
    var y = childObj.price;
    
    returnArr.push([x, y]);
  });
  
  return returnArr;
};


export default {
  name: 'Plot',
  data () {
    return {
      values: [[1,1], [2,4], [3,9], [4,16]]
    }
  },
  firebase: {
    ledger: publicLedgerRef
  },
  computed: {
    getValues: function() {
      return ledgerToArray(this.ledger)
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
