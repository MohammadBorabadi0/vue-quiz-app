<script setup lang="ts">
import QuizesCard from "./QuizesCard.vue";

const { quizes } = defineProps(["quizes"]);
</script>

<template>
  <div class="grid col-span-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <QuizesCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
  </div>
</template>
