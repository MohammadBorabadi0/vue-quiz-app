<script setup lang="ts">
const { question } = defineProps(["question"]);

const emit = defineEmits(["optionSelected"]);

const handleOptionClick = (option: boolean) => {
  emit("optionSelected", option);
};
</script>

<template>
  <div class="mt-10">
    <h2 class="text-2xl font-semibold">{{ question.text }}</h2>
    <section class="flex flex-col gap-3 mt-3">
      <div
        class="flex items-center gap-3 bg-yellow-50 border-2 border-yellow-500 rounded font-semibold cursor-pointer"
        v-for="option in question.options"
        :key="option.id"
        @click="handleOptionClick(option.isCorrect)"
      >
        <span class="bg-yellow-500 px-3 py-1">{{ option.label }}</span>
        <p>{{ option.text }}</p>
      </div>
    </section>
  </div>
</template>
