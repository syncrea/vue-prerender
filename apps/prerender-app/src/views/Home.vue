<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FruitList v-if="!loading" :fruits="fruits" />
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
import Vue from 'vue';
import FruitList from '../components/FruitList.vue';
import { prerenderPrepare } from '../prerender.helper';
import { getAppState, updateAppState } from '../state';

export default Vue.extend({
  name: 'Home',
  components: {
    FruitList,
  },
  data: () => getAppState(),
  mounted() {
    fetch('/api/fruits.json')
      .then(r => r.json())
      .then(data => new Promise(resolve => setTimeout(() => resolve(data), 2000)))
      .then(data => {
        this.loading = false;
        this.fruits = data;

        updateAppState({
          fruits: data,
          loading: false
        });
        prerenderPrepare(getAppState());
      });
  }
});
</script>
