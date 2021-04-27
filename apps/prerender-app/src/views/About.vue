<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Vue from 'vue';
import { prerenderPrepare } from '../prerender.helper';

export default Vue.extend({
  name: 'About',
  mounted() {
    prerenderPrepare();
  }
});
</script>
