<template>
  <div class="hello">
    
    <h1>HELLOWORLD</h1>
    <router-link to="/teste1">Go to teste1</router-link>
     <router-view/>
  </div>
</template>

<script>

import teste1 from './teste1'
export default {
  name: 'helloworld',
  components: {
    teste1
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
