<template>
  <header class="header">
    <RouterLink to="/">
      <img src="/img/logo-petshop-removebg-preview.png" alt="logo petshop">
    </RouterLink>
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
}

.header img {
  width: 120px;
}
</style>