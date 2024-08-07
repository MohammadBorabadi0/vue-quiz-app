<script setup lang="ts">
const { questionStatus, barPercent } = defineProps([
  "questionStatus",
  "barPercent",
]);
</script>

<template>
  <div class="flex items-center gap-5">
    <p>Question {{ questionStatus }}</p>
    <div class="w-64 h-10 border-2 border-yellow-500 rounded">
      <div class="h-full bg-yellow-200" :style="{ width: barPercent }"></div>
    </div>
  </div>
</template>
