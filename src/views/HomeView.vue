<script setup lang="ts">
import QuizesCards from "@/components/QuizesCards.vue";
import Search from "@/components/Search.vue";
import q from "@/data/data.json";
import { IQuiz } from "@/utils/type";
import { onMounted, ref, watch } from "vue";

const quizes = ref<IQuiz[] | []>([]);
const search = ref("");

onMounted(() => (quizes.value = q));

watch(search, (newVal) => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(newVal.toLowerCase())
  );
});

const updateSearch = (newSearch: string) => {
  search.value = newSearch;
};
</script>

<template>
  <div class="space-y-3">
    <Search :search="search" @update-search="updateSearch" />
    <QuizesCards :quizes="quizes" />
  </div>
</template>
