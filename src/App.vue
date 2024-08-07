<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main>
    <div class="max-w-screen-2xl mx-auto min-h-screen p-5">
      <RouterView />
    </div>
  </main>
</template>
