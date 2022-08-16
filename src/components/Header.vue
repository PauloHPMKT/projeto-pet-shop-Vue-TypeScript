<template>
  <header class="header">
    <h1>Logo</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Gallery</li>
        <li>Contacts</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 150px;
  background-color: red;
}
</style>