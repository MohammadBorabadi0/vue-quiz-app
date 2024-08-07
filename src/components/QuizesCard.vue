<script setup lang="ts">
const { quiz } = defineProps(["quiz"]);
</script>

<template>
  <div class="flex flex-col shadow-md rounded overflow-hidden">
    <!-- Header  -->
    <RouterLink :to="`/quizes/${quiz.id}`">
      <img :src="quiz.img" :alt="quiz.name" class="w-full h-40 object-cover" />
    </RouterLink>
    <!-- Content  -->
    <div class="p-3 space-y-2">
      <h4>{{ quiz.name }}</h4>
      <p>{{ quiz.questions.length }} Question</p>
    </div>
  </div>
</template>
