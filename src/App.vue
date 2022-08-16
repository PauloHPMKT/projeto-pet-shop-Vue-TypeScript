<template>
  <div>
    <Header />
      <RouterView />
    <Footer /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
});
</script>

<style>
@import './assets/main.css';
</style>