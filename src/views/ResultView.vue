<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const { numberOfCurrentAnswers, questions } = defineProps([
  "numberOfCurrentAnswers",
  "questions",
]);
</script>

<template>
  <div class="flex flex-col items-center gap-3 mt-5">
    <h2 class="text-2xl font-semibold">Your Results ...</h2>
    <p class="text-4xl">
      {{ numberOfCurrentAnswers }} / {{ questions.length }}
    </p>
    <button
      @click="router.push('/')"
      class="bg-orange-500 text-white px-3 py-1 rounded"
    >
      Back To Home
    </button>
  </div>
</template>
