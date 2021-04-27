<template>
  <div>
    <h1>Fruit list</h1>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">{{fruit.name}} ({{fruit.color}})</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FruitList',
  props: {
    fruits: Array,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
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
